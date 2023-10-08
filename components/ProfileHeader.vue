<script>
export default {

}
</script>

<template lang="pug">
.header
  Collection(title="Heyo!")
    template(#description)
      | I am Tutku Uçan. Since 4 years interest with Software Development. Last 3 years of this passed with Web Development. I Graduated in highschool IT and Web Design.  I was student at Tekirdag Namık Kemal University Computer Programming but i left after getting job from eQuota. Currently working as Frontend Developer but i am continue to develop full stack web projects.
    template(#content)
      .links
        a(href="https://www.linkedin.com/in/tutkuucan/" target="_blank") Linkedin
        a(href="https://github.com/tutkuofnight" target="_blank") Github
        a(href="https://www.instagram.com/tutkuofnight/" target="_blank") Instagram
        a(href="https://twitter.com/tutkuofnight" target="_blank") Twitter
  Collection(title="Projects")
    template(#content)
      .links
        .wrapper
          a(href="https://github.com/tutkuofnight/pixelist" target="_blank") Pixelist
          br
          br
          p Pixelist is a social pixelart maker app. You can make your dreams with pixels and you can share your works with other pixelists. Also you can include other works and you can build pixelarts with your friends or teammates.
          div
            p.title Tech Stack:
            ul
              li Backend: Node.js, MongoDB
              li Frontend: React.js, Canvas API
        .wrapper
          a(href="https://github.com/tutkuofnight/fitness-program-creator" target="_blank" ) FitProgram
          br
          br
          p You can create your fitness workout and diet program as public or private. You can view other people's public training and diet programs.
          div
            p.title Tech Stack:
            ul
              li Backend: Node.js, Sqlite
              li Frontend: Next.js, Redux
</template>

<style lang="scss" scoped>
@import '../static/scss/colors';
.header {
  max-width: 60%;
  p {
    font-weight: 400;
    &.title {
      font-weight: 600;
      margin: 14px 0px;
      color: #EBC7E8 !important;
    }
  }
  ul {
    li {
      color: $text-color;
      font-weight: 400;
    }
  }
  .links {
    margin: 20px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
@media (max-width: 890px) {
  .header {
    max-width: 80%;
  }
}
</style>
