<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | kennel` : 'kennel'
  },
  title: ''
})
</script>

<template>
  <main class="home">
    <section class="profile">
      <div class="container">
        <div class="profile__icon">
          <span class="material-symbols-rounded size-64">
            pets
          </span>
        </div>
        <div>
          <h1>Masahiro Kitagawa</h1>
          <p>Designer</p>
        </div>
        <p>
          this is simple portfolio template. Nuxt 3 + Nuxt Content
        </p>
      </div>
    </section>

    <section class="home__cover">
      <div class="container">
        <img src="https://source.unsplash.com/3WOh54znPGU" loading="lazy" alt="Dogs / Gulyás Bianka">
      </div>
    </section>

    <section class="works">
      <div class="container">
        <h2>Works</h2>
        <ContentList v-slot="{ list }" path="/works">
          <div v-for="page in list" :key="page._path">
            <img :src="page.cover" :alt="page.title">
            <h3>{{ page.title }}</h3>
            <NuxtLink :to="page._path">
              details
            </NuxtLink>
          </div>
        </ContentList>
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped>
.home
  display: flex
  flex-direction: column
  gap: var(--scale-8)

  &__cover
    img
      border-radius: var(--scale-4)

.profile
  &__icon
    color: $white
    background: CSStoRGBA( '--color-theme-primary', 1)
    width: 80px
    height: 80px
    border-radius: var(--scale-4)
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden

.size-64
  font-size: 64px
</style>
