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
  img(:src="app.theme.background")
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  color: whitesmoke;
}
.cv-content {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 50px;
  img {
    border-radius: 5px;
    box-shadow: rgb(43, 43, 43) 0px 0px 30px 0px;
  }
}
@media screen and (max-width: 900px) {
  .cv-content {
    padding: 30px;
    img {
      width: 100%;
    }
  }
}
</style>
