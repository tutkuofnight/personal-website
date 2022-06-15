<script>
export default {
  name: 'BlogPost',
  head(){
    return {
      title: this.ctx.title
    }
  },
  async asyncData({$content , params}){
    const ctx = await $content('blog/' + params.slug).fetch()
    return {ctx}
  }
}
</script>
<template lang="pug">
.blog-content
  .flex.align-center
    button(@click="$router.push('/blog')") Geri
    h1 {{ctx.title}}
  nuxt-content(:document="ctx")
</template>

<style lang="scss" scoped>
.blog-content {
  padding: 10px 200px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  h1 {
    font-size: 3em;
    color: rgb(93, 168, 234);
  }
}
</style>

