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
  NuxtLink.blog-post(:to="post.path")
    h2 {{post.title}}
    p {{post.desc}}
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
.blog-post {
  background: $contentColorDark !important;
  border-radius: $borderRadius;
  color: white;
  text-decoration: none;
  cursor: pointer;
  width: 50%;
  max-width: 50%;
  transition: 300ms all;
  &:hover {
    background: rgba($contentColorDark, 0.8);
  }
}
</style>