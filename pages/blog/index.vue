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
main
  header.flex.align-center
    h1 /blog
  div(v-for="post in posts" :key="post")
    BlogPost(:post="post")
    //- Empty
</template>

<style lang="scss" scoped>
@import '../../static/css/veriables';
main {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 20px auto;
}
header {
  gap: 10px;
  margin-bottom: 10px;
  h1 {
    font-size: 2.5em;
    padding-bottom: 10px;
    padding-right: 30px;
    border-bottom: 4px solid $themeColor;
    border-bottom-right-radius: 10px;
  }
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
@media screen and (max-width: 800px){
  main {
    width: 85%;
  }
}
</style>