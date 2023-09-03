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
          <span class="material-symbols-rounded size-64"> pets </span>
        </div>
        <div>
          <h1>Masahiro Kitagawa</h1>
          <p>Designer</p>
        </div>
        <p class="profile__desc">
          イヌ好きデザイナー。（ここはプロフィール説明文スペースです）<br />
          Dog-loving designer. (This is the space for my profile description.)
        </p>
      </div>
    </section>

    <section class="home__cover">
      <div class="container">
        <img
          src="https://source.unsplash.com/3WOh54znPGU"
          loading="lazy"
          alt="Dogs / Gulyás Bianka"
        />
      </div>
    </section>

    <section id="works" class="works">
      <div class="container">
        <h2>Works</h2>
        <div class="works__card-wrapper">
          <ContentList v-slot="{ list }" path="/works">
            <div v-for="page in list" :key="page._path" class="works__card">
              <img
                :src="page.cover"
                :alt="page.title"
                class="works__card__img"
              />
              <div class="works__card__txt">
                <h3>{{ page.title }}</h3>
                <NuxtLink :to="page._path">
                  details
                  <span class="material-symbols-rounded size-20">
                    arrow_right_alt
                  </span>
                </NuxtLink>
              </div>
            </div>
          </ContentList>
        </div>
      </div>
    </section>

    <PageToTop />
  </main>
</template>

<style lang="sass" scoped>
  .home
    display: flex
    flex-direction: column
    gap: var(--scale-8)

    &__cover
      img
        width: 100%
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
    &__desc
      margin-top: 24px

  .works
    h2
      padding-bottom: 16px
      border-bottom: 1px solid CSStoRGBA( '--color-border-divider', 1)
    &__card-wrapper
      padding: 40px 0
      display: grid
      grid-template-columns: 1fr
      gap: 40px 24px
      @include min-width($md)
        grid-template-columns: 1fr 1fr
    &__card
      display: flex
      flex-direction: column
      gap: 24px
      &__img
        width: 100%
        height: 280px
        object-fit: cover
      &__txt
        display: flex
        flex-direction: column
        gap: 8px
        a
          display: flex
          align-items: center
          gap: 8px
          &:hover
            text-decoration: none

  .size-20
    font-size: 20px
  .size-64
    font-size: 64px
</style>
