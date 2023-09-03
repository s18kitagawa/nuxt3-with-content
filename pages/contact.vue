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
    <section>
      <div class="container">
        <h1>Contact Page</h1>
        <p>this page wip</p>
        <NuxtLink to="/"> back to home </NuxtLink>
      </div>
    </section>
  </main>
</template>
