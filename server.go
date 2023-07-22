package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"math/big"
	"net/http"

	"github.com/google/uuid"
	_ "github.com/mattn/go-sqlite3"
)

type lurl struct {
	Lurl string
}

func main() {
	http.HandleFunc("/", rootHandler)
	fs := http.FileServer(http.Dir("./divert/dist/assets"))
	http.Handle("/assets/", http.StripPrefix("/assets", fs))
	http.HandleFunc("/api/", apiHandler)
	fmt.Printf("server started at port 8080\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}

}
func rootHandler(w http.ResponseWriter, r *http.Request) {
	if len(r.URL.Path) != 1 {
		db := openConnection()
		lurl, exists := resolveShorturl(db, r.URL.Path[1:])
		if exists {
			http.Redirect(w, r, lurl, http.StatusTemporaryRedirect)
		} else {
			http.ServeFile(w, r, "./static/404.html")
		}
		return
	}
	http.ServeFile(w, r, "./divert/dist/index.html")
}
func apiHandler(w http.ResponseWriter, r *http.Request) {
	db := openConnection()
	defer db.Close()
	switch r.Method {
	// case "GET":
	// 	id := strings.TrimPrefix(r.URL.Path, "/api/")
	// 	fmt.Fprintf(w, "this is the api route %s", id)
	case "POST":
		decoder := json.NewDecoder(r.Body)
		var lurl lurl
		err := decoder.Decode(&lurl)
		if err != nil {
			panic(err)
		}
		db := openConnection()
		result, exists := insertAndPublish(db, lurl.Lurl)
		if exists {
			result = findRow(db, lurl.Lurl)
		}
		w.Header().Set("content-type", "application/json")
		fmt.Fprintf(w, "{\"surl\":\"%s\"}", result)
	}
}
func openConnection() *sql.DB {
	db, err := sql.Open("sqlite3", "./database.db")
	if err != nil {
		log.Fatal(err)
	}
	sqlStmt := `
	CREATE TABLE IF NOT EXISTS "route" (
  	"id"	INTEGER NOT NULL UNIQUE,
	"lurl"	TEXT NOT NULL UNIQUE,
	"surl"	TEXT NOT NULL UNIQUE,
	PRIMARY KEY("id" AUTOINCREMENT));`
	_, err = db.Exec(sqlStmt)
	if err != nil {
		log.Printf("%q: %s\n", err, sqlStmt)
	}
	return db
}
func insertAndPublish(db *sql.DB, lurl string) (string, bool) {
	uuid := uuid.NewString()
	stmt, err := db.Prepare("insert into route(lurl, surl) values(?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec(lurl, uuid)
	if err != nil {
		return "", true
	}

	stmt2, err := db.Prepare("select id from route where surl=?")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt2.Close()
	var idTemp int
	err = stmt2.QueryRow(uuid).Scan(&idTemp)
	if err != nil {
		log.Fatal(err)
	}

	var surl string = enode62(idTemp)
	stmt3, err := db.Prepare("update route set surl=? where id=?")
	if err != nil {
		log.Fatal(err, "while update")
	}
	defer stmt3.Close()
	_, err = stmt3.Exec(surl, idTemp)
	if err != nil {
		log.Fatal(err)
	}
	log.Printf(" id value is %d and enc is %s", idTemp, surl)
	return surl, false
}
func enode62(id int) string {
	var i big.Int
	var surl string
	_ = i.SetInt64(int64(id))
	surl = i.Text(62)
	return surl
}

func findRow(db *sql.DB, url string) string {
	stmt, err := db.Prepare("select surl from route where lurl=?")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	var surl string
	err = stmt.QueryRow(url).Scan(&surl)
	if err != nil {
		log.Fatal(err)
	}
	return surl
}
func resolveShorturl(db *sql.DB, url string) (string, bool) {
	stmt, err := db.Prepare("select lurl from route where surl=?")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	var lurl string
	err = stmt.QueryRow(url).Scan(&lurl)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", false
		}
	}
	return lurl, true
}
