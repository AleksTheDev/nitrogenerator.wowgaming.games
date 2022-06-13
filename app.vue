<script setup>
useHead({
  title: 'Nitro Generator V2',
  link: {
    rel: 'manifest',
    href: 'https://progressier.com/client/progressier.json?id=FIttVyfmA2GYn7j0MDxv'
  },
  script: {
    src: 'https://progressier.com/client/script.js?id=FIttVyfmA2GYn7j0MDxv',
    defer: true
  },
  charset: 'utf-8',
  meta: [
    {
      name: 'description',
      content: 'A free Discord nitro generator'
    }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <div class="router">
    <NuxtPage />
  </div>
</template>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: #282c34;
  text-align: center;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>