<template>
  <div class="index">
    <img src="~/assets/img/nitro.png" alt="Nitro logo"/>
    <h1>Nitro Generator V2</h1>
    <button @click="$router.push('/claim')">Claim Nitro</button>
  </div>
</template>

<style>
  img {
    height: 40vmin;
    width: 40vmin;
  }

  h1 {
    color: white;
    font-size: 8vmin;
    font-weight: bold;
    line-height: 1.1;
    margin: 7vmin auto;
    margin-top: 1vmin;
    
  }

  button {
    font-family: inherit;
    font-size: min(6vmin, 30px);
    color: #ff9900;
    background-color: rgba(255, 153, 0, 0.1);
    border-radius: 2em;
    border: 2px solid #ff9900;
    outline: none;
    width: 50vmin;
    max-width: 250px;
    height: 15vmin;
    max-height: 60px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:active {
    background-color: rgba(255, 153, 0, 0.2);
  }
</style>