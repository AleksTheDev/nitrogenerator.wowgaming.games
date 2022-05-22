<script setup>
  const loaded = useState('loaded', () => false)
</script>

<template>
  <div class="claim">
    <h1 v-if="!loaded">Loading...</h1>
    <img v-if="!loaded" @load="loaded = true" hidden src="~/assets/img/rickroll.gif" />

    <h1 v-if="loaded">You have been rickrolled!</h1>
    <img v-if="loaded" src="~/assets/img/rickroll.gif" alt="Rickroll gif" />
  </div>
</template>

<style>
  img {
    height: 50vmin;
    width: 50vmin;
  }

  h1 {
    color: white;
    font-size: 8vmin;
    font-weight: bold;
    line-height: 1.1;
  }
</style>