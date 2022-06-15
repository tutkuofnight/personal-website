<script>
export default {
  name: 'IndexPage',

}
</script>

<template lang="pug">
.container.flex.align-center.direction-column.justify-center
  main.flex.align-center
    img.profile-image(src="@/static/img/me-long.jpeg")
    .content
      h1 Merhaba, Ben Tutku!
      p Kişisel websiteme hoşgeldin. Burada yapmak istediğim şeyler; Üzerinde uzun uzun araştırma yaptığım konuları ve ilgi alanlarımı sizlerle paylaşmak,  Günlük olarak yaptığım işlerden bahsetmek ve en önemlisi yazılım alanında kendi gelişimimi bu websitesini geliştirerek ve yaptığım diğer projeleri sizlere tanıtarak göstermek.
      .links
        NuxtLink(to="blog") /blog
        NuxtLink(to="cv") /cv
  footer.flex.align-center.justify-center
    a(href="https://www.linkedin.com/in/tutku-u%C3%A7an-610170195/" target="_blank")
      i.fa-brands.fa-linkedin
    a(href="https://github.com/tutklon" target="_blank")
      i.fa-brands.fa-github
    a(href="https://twitter.com/tutklon" target="_blank")
      i.fa-brands.fa-twitter
    a(href="https://www.instagram.com/tutklon/" target="_blank")
      i.fa-brands.fa-instagram
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
.container {
  height: 100vh;
}
main {
  .profile-image {
    width: 270px;
    max-height: 399px;
    border-radius: $borderRadius;
    position: relative;
    z-index: 2;
    transform: translateX(20%);
  }
  .content {
    background: #323232;
    border-radius: $borderRadius;
    padding: 60px 100px;
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
    font-size: 30px;
    &:hover {
      color: white;
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