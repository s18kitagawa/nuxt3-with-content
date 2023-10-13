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

        <form
          class="contact__form"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div class="contact__item">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" autocomplete="name" />
          </div>
          <div class="contact__item">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" autocomplete="email" />
          </div>
          <div class="contact__item">
            <label for="message">Message</label>
            <textarea id="message" rows="8" name="message"></textarea>
          </div>
          <div class="contact__submit">
            <button type="submit">Submit</button>
          </div>
        </form>

        <NuxtLink to="/"> back to home </NuxtLink>
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped>
  .contact
    &__form
      padding: var(--scale-8) 0
      margin: 0 auto
      width: 100%
      max-width: 720px
    &__item
      display: flex
      flex-direction: column
      margin-bottom: 2%
    &__submit
      text-align: center
</style>
