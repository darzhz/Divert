<script>
  import {  createEventDispatcher } from "svelte";
export let placeholder;
export let TextElement;
    let text;
    const clear = ()=>{
        text = null;
    }
    const dispatch = createEventDispatcher();
    const validateUrl = () => {
      if (isValidURL(text)) {
        var parser = document.createElement('a');
        parser.href = text;
        if(parser.protocol != text.substring(0,5) && text.substring(0,6) != 'https:'){
          text = 'http://'+text;
        }
        TextElement.style.backgroundColor = 'rgba(0, 0, 0, 0.582)';
        dispatch('valid',{ url:text });
      }else{
        TextElement.style.backgroundColor = 'red';
      }
    }
    const isValidURL = (string) => {
      var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      return (res !== null)
    };
    
</script>
<div id="box" bind:this={TextElement}>
    <div id="innerbox">
    <span class="material-symbols-rounded iconx">
circle
</span>
    <input type="text" placeholder={placeholder} bind:value={text} on:input={validateUrl} spellcheck="false">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span class="material-symbols-rounded iconx" on:click={clear}>
close
</span>
</div>
</div>
<style>
    /* cyrillic-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaorCFPrEHJA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaorCMPrEHJA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaorCHPrEHJA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaorCGPrEHJA.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtaorCIPrE.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
    @font-face {
    font-family: "Material Symbols Rounded";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialsymbolsrounded/v113/syl0-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190FjpZIvDmUSVOK7BDJ_vb9vUSzq3wzLK-P0J-V_Zs-QtQth3-jOc7TOVpeRL2w5rwZu2rIelXxc.woff2)
      format("woff2");
  }
  .material-symbols-rounded {
    font-family: "Material Symbols Rounded";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
  }
    #box{
        background-color: rgba(0, 0, 0, 0.582);
        mix-blend-mode: soft-light;
        width: 70dvw;
        height: 12dvh;
        min-height: 70px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        border-radius: 8px;
        color: antiquewhite;
        margin :10px;
        transition: all 300ms ease-in-out;
    }
    .iconx {
        font-size: xx-large;
        padding: 1.3dvh;
    }
    #innerbox {
        display: flex;
        justify-content: center;
        height: 60%;
    }
    input {
        outline: none;
        font-family: 'Raleway', sans-serif;
        text-align: center;
        width: 70%;
        font-size: x-large;
        text-decoration: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: white;
        transition: all 300ms ease-in-out;
    }
    input::placeholder{
        color: antiquewhite;
        transition: all 300s ease-in-out;
    }
</style>
