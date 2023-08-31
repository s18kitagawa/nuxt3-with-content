<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | kennel` : 'kennel'
  },
  title: ''
})
</script>

<template>
  <main class="post">
    <ContentDoc v-slot="{ doc }">
      <div class="container">
        <img
          :src="doc.cover"
          :alt="doc.title"
          class="post__cover"
        >
        <article>
          <ContentRenderer :value="doc" />
        </article>
      </div>
    </ContentDoc>
    <PageToTop />
  </main>
</template>

<style lang="sass" scoped>
.post
  &__cover
    width: 100%
    max-height: 560px
    object-fit: cover
article
  padding: 40px 0
  div
    :deep(h2)
      padding: 24px 0 0
    :deep(p)
      padding: 24px 0

</style>
