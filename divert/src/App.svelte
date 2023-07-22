<script>
  import Linkcomp from './lib/Linkcomp.svelte'
</script>
<Linkcomp placeholder="enter link here"/>

<Linkcomp placeholder="Look Up"/>

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
</style>
