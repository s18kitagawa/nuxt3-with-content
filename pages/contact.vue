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
        <h1>Contact</h1>
        <p>wip</p>

        <NuxtLink to="/"> back to home </NuxtLink>
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped></style>
