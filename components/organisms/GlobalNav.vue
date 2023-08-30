<script lang="ts">
export default {
  data () {
    return {
      open: false
    }
  }
}
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
      <li>
        <NuxtLink to="/">
          <span class="material-symbols-rounded">
            home
          </span>
          home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">
          <span class="material-symbols-rounded">
            palette
          </span>
          works
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">
          <span class="material-symbols-rounded">
            chat_bubble
          </span>
          Contact
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="sass" scoped>
.global-nav
  &__menu
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
    display: none
    &.is-active
      display: block

.size-48
  font-size: 48px
</style>
