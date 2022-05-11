<template>
  <div>
    <h1>Nuxt3 / Vitest Minimal Starter</h1>
    <pre>{{ word }}</pre>
    <pre>{{ wuzzle }}</pre>
  </div>
</template>

<script setup>
const word = ref();
const wuzzle = ref();

onMounted(async () => {
  word.value = await getWord();
  wuzzle.value = await getWuzzle();
})
</script>
