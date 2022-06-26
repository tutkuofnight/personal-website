<script>
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
<template lang="pug">
  div.blog-post(@click="$router.push(post.path)")
    h2 {{post.title}}
    p {{post.desc}}
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
.blog-post {
  background: $contentColor;
  // border-radius: $borderRadius;
  border: 1px solid $textColor;
  padding: 20px;
  color: $textColor;
  text-decoration: none;
  cursor: pointer;
  width: 47%;
  transition: 300ms all;
  &:hover {
    box-shadow: $themeColor 4px 4px 0px 0px;
  }
}
</style>