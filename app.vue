<template>
  <div>
    {{ word }}
    {{ wuzzle }}
    <!-- <NuxtWelcome /> -->
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
