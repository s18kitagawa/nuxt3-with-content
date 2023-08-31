<script lang="ts" setup>
const pageTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <nav class="paget-to-top">
    <div class="container">
      <div class="paget-to-top__content">
        <button
          class="paget-to-top__btn"
          @click="pageTop"
        >
          Page top
          <span class="material-symbols-rounded size-20">
            arrow_upward_alt
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
.paget-to-top
  &__content
    border-top: 1px solid CSStoRGBA( '--color-border-divider', 1)
    padding: var(--scale-7) 0
  &__btn
    display: flex
    align-items: center
    gap: 8px
    background: none
    color: CSStoRGBA( '--color-theme-primary', 1)

.size-20
  font-size: 20px
</style>
