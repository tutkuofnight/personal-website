<script>
export default {
  name: 'BlogIndex',
  head(){
    return {
      title: 'Tutku Uçan | Blog'
    }
  },
  async asyncData({$content}){
    const posts = await $content('blog').fetch()
    return { posts }
  },
}
</script>
<template lang="pug">
.container
  header.flex.align-center
    i.fa-solid.fa-angle-left.icon-btn.medium(@click="$router.push('/')")
    h1 İçerikler
  hr
  div
    Empty
</template>

<style lang="scss" scoped>
header {
  gap: 20px
}
i {
  transition: 300ms all;
  &:hover {
    transform: translateX(-5px);
  }
  &:active {
    transform: scale(1.1) translateX(-5px);
  }
}
</style>