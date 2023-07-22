<script>
  import Linkcomp from './lib/Linkcomp.svelte';
  import LinkDisp from './lib/LinkDisp.svelte';
  import logo from "./assets/divert.svg";
    import { onMount } from 'svelte';
  let status = "Look Up";
  let url = "";
  let dispElment;
  let linkElm;
  const moveup = [
    {transform : "translateY(0)"},
    {transform : "translateY(120px)"},
    {transform : "translateY(0)"}
  ]
  const movedown = [
    {transform : "translateY(0)"},
    {transform : "translateY(-120px)"},
    {transform : "translateY(0)"}
  ]
  const Timing = {
  duration: 300,
  iterations: 1,
};
  const animateElem = () =>{
    dispElment.animate(moveup,Timing)
    linkElm.animate(movedown,Timing)
  }
  const changeStatus = async (e) => {
    url = e.detail.url;
    status = "Click Me"
  }
  onMount(()=>{
    animateElem();
  })
  const generateLink = async() => {
    animateElem();
    try {
                const response = await fetch('/api/', {
                 method: 'POST',
                 headers: {
                   'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({
                     "Lurl": url
                    })
                 });
                 const data = await response.json();
                 console.log(data);
                 status = window.location.href + data.surl
               } catch(error) {
                  console.log(error)
                 } 
  }
</script>
<Linkcomp bind:TextElement={linkElm} placeholder="enter link here" on:valid={changeStatus}/>
<img src={logo} alt="logo of divert"/>
<LinkDisp bind:box={dispElment} bind:text={status} bind:placeholder={status} on:generate={generateLink}/>
<div id="info">
  <p>
    Divert is url shortning service created by <a href="https://github.com/darzhz/">darzh</a>
  </p>
</div>

<style>
  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    --pri: #fd136c;
    --sec: #ff3334;
    --tri: rgb(99 15 255 / 41%);
    --quad: #fd4772;
  }
  :global(body) {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    margin: 0;
    padding: 0;
    background-position: center;
    background-size: cover;
  }
  :global(html) {
    height: -webkit-fill-available;
    font-family: "Poppins", sans-serif;
  }
  @font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaorCHPrEHJA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
  #info {
    color:white;
    mix-blend-mode: soft-light;
    font-family: 'Raleway', sans-serif;
  }
  #info a{
    color: blanchedalmond;
  }
</style>
