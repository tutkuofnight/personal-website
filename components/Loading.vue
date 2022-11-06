<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['app']),

  }
}
</script>
<template>
<div class="loading-background">
  <img class="flower-icon" :src="`/img/divisions/${app.theme.division}/flower/${app.theme.flower.icon}`">
</div>
</template>

<style lang="scss" scoped>
.loading-background {
  transition: 300ms all;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: black;
  position: absolute;
  z-index: 99;
  img {
    animation: load 1200ms infinite;
  }
}
@keyframes load {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>