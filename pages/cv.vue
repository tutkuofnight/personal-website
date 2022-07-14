<script>
export default {
  name: 'CvPage',
  head(){
    return {
      title: "CV | Tutku Uçan"
    }
  },
  async asyncData({$content}){
    const cv = await $content('cv').fetch()
    return {cv}
  }
}
</script>

<template lang="pug">
.container
  div
    br
    br
    nuxt-content(:document="cv")
  br
  Footer
</template>

<style lang="scss" scoped>
.container {
  & + div {
    margin-top: 30px;
  }
}
</style>
