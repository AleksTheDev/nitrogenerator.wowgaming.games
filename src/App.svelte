<script lang="ts">
  import Generate from "./lib/Generate.svelte";
  import Rickroll from "./lib/Rickroll.svelte";

  let generateClicked = false;
  const generateClick = () => { generateClicked = true; };
</script>

<main>
  {#if !generateClicked}
    <Generate buttonClick={generateClick} />
  {/if}

  {#if generateClicked}
    <Rickroll />
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    background-color: #282c34;
    min-height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
