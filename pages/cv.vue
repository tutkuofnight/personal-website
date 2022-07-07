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
    nuxt-content(:document="cv" class="nuxt-content")
  br
</template>

<style lang="scss" scoped>

</style>
