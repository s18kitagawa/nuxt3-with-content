<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | kennel` : 'kennel'
  },
  title: 'Contact'
})
</script>

<template>
  <main>
    <h1>Contact Page</h1>
    <NuxtLink to="/">
      back to home
    </NuxtLink>
  </main>
</template>
