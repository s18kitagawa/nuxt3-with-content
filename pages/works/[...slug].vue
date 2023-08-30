<script lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | kennel` : 'kennel'
  },
  title: ''
})
</script>

<template>
  <main>
    <ContentDoc />
  </main>
</template>
