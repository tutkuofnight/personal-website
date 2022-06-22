<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      darkMode: true,
      modalStatus: false
    }
  },
  async asyncData({$content}){
    const notepad = await $content('notepad').fetch()
    return {notepad}
  }
}
</script>

<template lang="pug">
.container.flex.align-center.direction-column.justify-center
  Modal(v-if="modalStatus" @closeModal="modalStatus = $event" :notepad="notepad")
  main.flex.align-center
    .profile-image-section
      .image-content
        img.profile-image(src="@/static/img/me-long.jpeg")
      .context
        i.bx(:class="{'bx-moon' : darkMode , 'bx-sun' : !darkMode}" @click="darkMode = !darkMode")
        i.bx.bx-food-menu(@click="modalStatus = true")
    .content
      h1 Merhaba, Ben Tutku!
      p Kişisel websiteme hoşgeldin. Burada yapmak istediğim şeyler; Üzerinde uzun uzun araştırma yaptığım konuları ve ilgi alanlarımı sizlerle paylaşmak, günlük olarak yaptığım işlerden bahsetmek ve en önemlisi yazılım alanında kendi gelişimimi bu websitesini geliştirerek ve yaptığım diğer projeleri sizlere tanıtarak göstermek.
      .links
        NuxtLink(to="blog") /blog
        NuxtLink(to="cv") /cv
  footer.flex.align-center.justify-center
    a(href="https://www.linkedin.com/in/tutku-u%C3%A7an-610170195/" target="_blank")
      i.bx.bxl-linkedin-square
    a(href="https://github.com/tutklon" target="_blank")
      i.bx.bxl-github
    a(href="https://twitter.com/tutklon" target="_blank")
      i.bx.bxl-twitter
    a(href="https://www.instagram.com/tutklon/" target="_blank")
      i.bx.bxl-instagram
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
.container {
  height: 100vh;
}
main {
  .profile-image-section {
    display: grid;
    grid-template-rows: 14% auto 14%;
    height: 100%;
    width: 270px;
    position: relative;
    z-index: 2;
    transform: translateX(20%);
    .profile-image {
      width: 270px;
      max-height: 399px;
      border-radius: $borderRadius;
    }
    .image-content {
      grid-row: 2 / 3;
      justify-self: center;
      align-self: center;
    }
    .context {
      grid-row: 3 / 4;
      justify-self: center;
      align-self: center;
      i {
        cursor: pointer;
        font-size: 25px;
        color: lightgray;
        padding: 5px;
        &:hover {
          color: white;
        }
      }
    }
  }
  .content {
    background: $contentColorDark;
    border-radius: $borderRadius;
    padding: 100px 100px;
    h1 {
      font-size: 2.5em;
      color: $themeColor;
      margin: 0;
      padding-bottom: 10px;
    }
    p {
      font-size: 1.5em;
    }
    .links {
      display: flex;
      gap: 20px;
      a {
        color: white;
        font-size: 1.5em;
        text-decoration: none;
        border-bottom: 3px solid white;
        transition: 250ms all;
        padding-bottom: 2px;
        font-weight: 600;
        &:hover {
          color: $themeColor;
          border-bottom: 3px solid $themeColor;
        }
      }
    }
  }
}
nav {
  div {
    gap: 10px;
  }
  a {
    padding: 5px 10px;
    border: 1px solid white;
    color: white;
    text-decoration: none;
    font-weight: 600;
    border-radius: 2px;
    &:hover , &.router-link-exact-active {
      background: white;
      color: black;
    }
  }
}
footer {
  padding: 50px 0px;
  gap:20px;
  i {
    cursor: pointer;
    color: lightgray;
    font-size: 35px;
    &:hover {
      color: white;
    }
  }
}
@media screen and (max-width: 1250px){
  main {
    .content {
      padding: 60px 100px;
    }
  }
}
@media screen and (max-width: 1024px) {
  main {
    .profile-image {
      width: 250px;
      max-height: 349px;
    }
    .content {
      font-size: 15px;
    }
  }
}
@media screen and (max-width: 800px){
  main {
    flex-direction: column;
    .profile-image {
      width: 200px;
      max-height: 309px;
      transform: translateX(0%) translateY(15%);
    }
    .content {
      padding: 60px 50px;
    }
  }
  footer {
    padding: 40px 0px;
  }
  .container {
    height: auto;
  }
}
@media screen and (max-width: 550px) {
  main {
    margin-top: -50px;
  }
}
</style>