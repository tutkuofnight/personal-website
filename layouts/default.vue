<template lang="pug">
  .like-you
    AppHeader(v-if="$route.path !== '/'")
    noscript
      iframe(src="https://www.googletagmanager.com/ns.html?id=GTM-KW43MK4" height="0" width="0" style="display:none;visibility:hidden")
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