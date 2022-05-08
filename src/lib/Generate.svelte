<script lang="ts">
  import logo from '../assets/nitro.png';
  import rickroll from '../assets/rickroll.gif';

  export let buttonClick = () => {};
</script>

<img src={logo} alt="Nitro Logo" />

<h1>Nitro Generator V2</h1>

<button on:click={buttonClick}>
  Generate Nitro
</button>

<img src={rickroll} alt="Rickroll" hidden />

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
