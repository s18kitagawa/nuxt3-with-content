<template>
  <h1>Top Page</h1>
  <ContentList path="/works" v-slot="{ list }">
      <div
        v-for="page in list"
        :key="page._path"
      >
        <h2>{{ page.title }}</h2>
        <p>{{ page.desc }}</p>
        <NuxtLink :to="page._path">
            details
        </NuxtLink>
      </div>
  </ContentList>
  <p>
    <NuxtLink to="/works/post-1">post-1</NuxtLink>
  </p>
  <NuxtLink to="/contact">contact</NuxtLink>
</template>
