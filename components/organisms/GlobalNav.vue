<script lang="ts" setup>
const globalNavItems = ref([
  {
    path: '/',
    icon: 'home',
    txt: 'Home'
  },
  {
    path: '/',
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
  &__menu
    position: absolute
    top: 0
    left: calc( 50vw - 1200px / 2 - 40px )
    background: $white
    border-radius: 50%
    width: 72px
    height: 72px
    display: flex
    justify-content: center
    align-items: center
    transition: 0.2s
    &:hover
      color: CSStoRGBA( '--color-link', 1)
      background: CSStoRGBA( '--color-link-low', 1)
    @media ( prefers-color-scheme: dark )
      background: CSStoRGBA( '--color-bg-middle', 1)
      &:hover
        color: CSStoRGBA( '--color-link', 1)
        background: $sky-200
  &__menu-list
    position: relative
    top: calc(72px + 24px)
    left: calc( 50vw - 1200px / 2 - 40px + 72px / 2 )
    opacity: 0
    transform: translateX( -40px )
    transition: 0.3s
    &.is-active
      opacity: 1
      transform: translateX( 0px )
    &__item
      margin-bottom: 24px
      & a
        font-weight: 700
        text-decoration: none
        display: flex
        align-items: center
        gap: 4px
        padding: 8px 24px
        background: $white
        border-radius: 24px
.size-20
  font-size: 20px
.size-48
  font-size: 48px
</style>
