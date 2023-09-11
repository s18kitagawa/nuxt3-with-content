export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('fade-in', {
    mounted(el) {
      const options: IntersectionObserverInit = {
        rootMargin: '0px',
        threshold: 1
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      }, options)

      observer.observe(el)
    }
  })
})
