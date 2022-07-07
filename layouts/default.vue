<template lang="pug">
  .like-you
    AppHeader(v-if="$route.path !== '/'")
    Nuxt
</template>

<style>
.like-you {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
}
</style>