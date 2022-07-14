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
  },
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
        //- i.bx(:class="{'bx-moon' : darkMode , 'bx-sun' : !darkMode}" @click="darkMode = !darkMode")
        i.bx.bx-food-menu(@click="modalStatus = true")
    .content
      h1 Merhaba, Ben Tutku!
      p Kişisel websiteme hoşgeldin. Burada yapmak istediğim şeyler; Üzerinde uzun uzun araştırma yaptığım konuları ve ilgi alanlarımı sizlerle paylaşmak, günlük olarak yaptığım işlerden bahsetmek ve en önemlisi yazılım alanında kendi gelişimimi bu websitesini geliştirerek ve yaptığım diğer projeleri sizlere tanıtarak göstermek.
      .links
        NuxtLink(to="blog") /blog
        NuxtLink(to="cv") /cv
  Footer(style="align-self: center")
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
.container {
  height: 100vh;
}
main {
  .profile-image-section {
    display: grid;
    grid-template-rows: auto auto auto;
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
      i {
        cursor: pointer;
        font-size: 25px;
        color: $textColor;
        padding: 5px;
        opacity: 0.7;
        &:hover {
          opacity: 1;
        }
        padding: 5px;
      }
    }
  }
  .content {
    background: $contentColor;
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
        color: $textColor;
        font-size: 1.5em;
        text-decoration: none;
        border-bottom: 3px solid $textColor;
        transition: 250ms all;
        padding-bottom: 2px;
        font-weight: 500;
        &:hover {
          color: $themeColor;
          border-bottom: 3px solid $themeColor;
        }
      }
    }
  }
}

@media screen and (max-width: 1250px){
  main {
    .content {
      padding: 60px 100px;
    }
    .profile-image-section {
      grid-template-rows: 10% auto 10%;
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
    .content {
      padding: 60px 50px;
      text-align: center;
      .links {
        justify-content: center;
      }
    }
    .profile-image-section {
      width: 100%;
      grid-template-columns: 25% 50% 25%;
      grid-template-rows: 1fr;
      transform: translateY(40px);
      .profile-image {
        width: 200px;
        max-height: 309px;
      }
      .image-content {
        grid-column: 2 / 3;
      }
      .context {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
        display: flex;
        flex-direction: column;
        align-self: center;
        i {
          font-size: 2em;
        }
      }
    }
  }
  .container {
    height: auto;
  }
}
@media screen and (max-width: 550px) {
  main {
    .profile-image-section {
      grid-template-columns: 20% 60% 20%;
    }
  }
}
</style>