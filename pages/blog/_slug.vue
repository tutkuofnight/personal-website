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
main
  .blog-content
    .flex.align-center.transform
      h1 {{ctx.title}}
    nuxt-content(:document="ctx")
</template>

<style lang="scss" scoped>
@import '../../static/css/veriables';
a {
  color: $themeColor;
}
.transform {
  transform: translateX(-20px);
}
.blog-content {
  max-width: 70%;
  margin: 0 auto;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  h1 {
    font-size: 2.5em;
    color: rgb(93, 168, 234);
  }
}
@media screen and (max-width: 590px) {
  .blog-content {
    font-size: 20px;
    h1 {
      font-size: 2em;
    }
  }
}
</style>

