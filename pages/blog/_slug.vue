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
  .flex.align-center.transform
    button.close(@click="$router.push('/blog')")
      i.bx.bx-chevron-left.icon-btn
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
  padding: 10px 200px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  h1 {
    font-size: 3em;
    color: rgb(93, 168, 234);
  }
  .close {
    background: none;
    border: none;
    i {
      transition: 300ms all;
      border: 2px solid transparent;
      margin-top: 10px;
      color: $textColor;
      font-size: 50px;
      &:hover {
        transform: translateX(-5px);
      }
      &:active {
        transform: scale(1.1) translateX(-5px);
      }
    }
  }
}
</style>

