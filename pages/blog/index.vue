<script>
export default {
  name: 'BlogIndex',
  head(){
    return {
      title: 'Blog | Tutku Uçan'
    }
  },
  async asyncData({$content}){
    const posts = await $content('blog').fetch()
    console.log(posts)
    return { posts }
  },
}
</script>
<template lang="pug">
.container
  header.flex.align-center
    i.bx.bx-chevron-left.icon-btn.large(@click="$router.push('/')")
    h1 İçerikler
  div(v-for="post in posts")
    BlogPost(:post="post")
    //- Empty
</template>

<style lang="scss" scoped>
header {
  gap: 10px;
  margin-bottom: 40px;
}
i {
  transition: 300ms all;
  border: 2px solid transparent;
  margin-top: 5px;
  &:hover {
    transform: translateX(-5px);
  }
  &:active {
    transform: scale(1.1) translateX(-5px);
  }
}
.hr {
  width: 100%;
  height: 2px;
  background: gray;
}
</style>