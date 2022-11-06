<script>
import {mapState} from 'vuex'
export default {
  name: 'CvPage',
  head(){
    return {
      title: "CV | Tutku Uçan"
    }
  },
  computed: {
    ...mapState(['app'])
  }
}
</script>

<template lang="pug">
.container
  .cv-content
    img(src="/img/CV.svg")
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh
}
.cv-content {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  padding: 50px;
  background: rgba(#000000, 0.8);
}
@media screen and (max-width: 900px) {
  .cv-content {
    padding: 30px;
    img {
      width: 100%;
    }
  }
}
.bg-img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: auto;
  overflow: hidden !important;
  opacity: 0.6;
}
</style>
