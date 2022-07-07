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
  div.content
    header.flex.align-center
      h1 İçerikler
    div(v-for="post in posts")
      BlogPost(:post="post")
    //- Empty
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  display: flex;
  justify-content: center;
  & + .content {
    width: 70%;
  }
}
header {
  gap: 10px;
  margin-bottom: 40px;
  h1 {
    font-size: 2.5em;
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
</style>