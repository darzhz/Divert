package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"math/big"
	"net/http"
	"strings"

	"github.com/google/uuid"
	_ "github.com/mattn/go-sqlite3"
)

type lurl struct {
	Lurl string
}

func main() {
	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/api/", apiHandler)
	fmt.Printf("server started at port 8080\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}

}
func rootHandler(w http.ResponseWriter, r *http.Request) {
	if len(r.URL.Path) != 1 && r.URL.Path[0:3] != "/api" {
		http.Redirect(w, r, r.URL.Path[1:], http.StatusTemporaryRedirect)
		return
	}
	http.ServeFile(w, r, "./static/index.html")
}
func apiHandler(w http.ResponseWriter, r *http.Request) {
	db := openConnection()
	defer db.Close()
	switch r.Method {
	case "GET":
		id := strings.TrimPrefix(r.URL.Path, "/api/")
		fmt.Fprintf(w, "this is the api route %s", id)
	case "POST":
		decoder := json.NewDecoder(r.Body)
		var lurl lurl
		err := decoder.Decode(&lurl)
		if err != nil {
			panic(err)
		}
		db := openConnection()
		result := insertAndPublish(db, lurl.Lurl)
		log.Println(lurl.Lurl, result)
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
func insertAndPublish(db *sql.DB, lurl string) string {
	uuid := uuid.NewString()
	stmt, err := db.Prepare("insert into route(lurl, surl) values(?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec(lurl, uuid)
	if err != nil {
		log.Fatal(err)
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

	var i big.Int
	_ = i.SetInt64(int64(idTemp))
	stmt3, err := db.Prepare("update route set surl=? where id=?")
	if err != nil {
		log.Fatal(err, "while update")
	}
	defer stmt3.Close()
	_, err = stmt3.Exec(i.Text(62), idTemp)
	if err != nil {
		log.Fatal(err)
	}
	log.Printf(" id value is %d and enc is %s", idTemp, i.Text(62))
	return lurl + uuid
}

// func findRow(db *sql.DB, url string) bool {
// 	stmt, err := db.Prepare("select lurl, surl from route where lurl=?")
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	defer stmt.Close()
// 	var lurl string
// 	var surl string
// 	err = stmt.QueryRow(url).Scan(&lurl, &surl)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	fmt.Println(lurl, surl)
// 	return true
// }
