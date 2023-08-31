<script lang="ts" setup>
const globalNavItems = ref([
  {
    path: '/',
    icon: 'home',
    txt: 'Home'
  },
  {
    path: '/#works',
    icon: 'palette',
    txt: 'Works'
  },
  {
    path: '/contact',
    icon: 'chat_bubble',
    txt: 'Contact'
  }
])
const open = ref<boolean>(false)

const globalNavItem = computed(() => globalNavItems.value)
</script>

<template>
  <nav class="global-nav">
    <button
      class=" global-nav__menu"
      @click="open=!open"
    >
      <span class="material-symbols-rounded size-48">
        menu
      </span>
    </button>

    <ul
      class="global-nav__menu-list"
      :class="{'is-active' : open }"
    >
      <li
        v-for="menu in globalNavItem"
        :key="menu.txt"
        class="global-nav__menu-list__item"
        @click="open=!open"
      >
        <NuxtLink :to="menu.path">
          <span class="material-symbols-rounded size-20">
            {{ menu.icon }}
          </span>
          {{ menu.txt }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="sass" scoped>
.global-nav
  position: fixed
  top: unset
  left: unset
  right: calc( 20px + 72px )
  bottom: calc( 72px + 40px)
  @include min-width($xl)
    top: 0
    left: 0
    right: unset
    bottom: unset

  &__menu
    position: absolute
    background: $white
    border-radius: 50%
    width: 72px
    height: 72px
    display: flex
    justify-content: center
    align-items: center
    @include transition(0.2s)
    &:hover
      color: CSStoRGBA( '--color-link', 1)
      background: CSStoRGBA( '--color-link-low', 1)
    @media ( prefers-color-scheme: dark )
      background: CSStoRGBA( '--color-bg-middle', 1)
      &:hover
        color: CSStoRGBA( '--color-link', 1)
    @include min-width($xl)
      top: 80px
      left: calc( 50vw - var(--scale-content) / 2 - 96px )
      right: unset
      bottom: unset
  &__menu-list
    position: absolute
    top: unset
    left: unset
    right: calc( -72px / 2 )
    bottom: 0
    visibility: hidden
    opacity: 0
    transform: translateX( 40px )
    @include transition()
    @include min-width($xl)
      transform: translateX( -40px )
      top: calc( var(--scale-8) + 72px + 24px)
      left: calc( 50vw - var(--scale-content) / 2 - 96px + 72px / 2 )
      right: unset
      bottom: unset
    &.is-active
      visibility: visible
      opacity: 1
      transform: translateX( 0px )
    &__item
      margin-bottom: 24px
      & a
        color: CSStoRGBA( '--color-txt-primary', 1)
        font-weight: 700
        text-decoration: none
        display: flex
        align-items: center
        gap: 4px
        padding: 8px 24px
        background: $white
        border-radius: 24px
        @include transition()
        &:hover,
        &:active,
        &focus
          color: CSStoRGBA( '--color-link', 1)
          background: CSStoRGBA( '--color-link-low', 1)
        @media ( prefers-color-scheme: dark )
          background: $white
          background: CSStoRGBA( '--color-bg-middle', 1)
.size-20
  font-size: 20px
.size-48
  font-size: 48px
</style>
