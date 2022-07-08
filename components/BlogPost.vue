<script>
import {format} from 'date-fns'
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  filters: {
      formatDate(){
        return format(new Date() , 'dd MM yyyy')
      }
  }
}
</script>
<template lang="pug">
  nuxt-link.article-link(:to="post.path")
    .article-content
      h1 {{post.title}}
      p {{post.updatedAt | formatDate}}
    p.article-desc {{post.desc}}
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
.article-link {
  width: 100%;
  color: $textColor;
  text-decoration: none;
  text-decoration-color: $themeColor;
  -moz-text-decoration-color: $themeColor;
  &:hover {
    h1 {
      text-decoration: $themeColor 4px underline;
    }
  }
}
.article-content {
  display: flex;
  align-items: center;
  p {
    margin-left: 20px;
    color: lightgray;
  }
}
.article-desc {
  margin-top: 10px;
  color: lightgray;
}
@media screen and (max-width: 800px){
  .article-content {
    display: block;
    p {
      margin-top: -10px;
      margin-left: 0px;
      margin-bottom: 30px;
    }
  }
}
</style>