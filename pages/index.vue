<script>
import {mapGetters} from 'vuex'
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
  methods: {
    ...mapGetters(['getDeveloperName'])
  }
}
</script>

<template>
  <main>
    <div class="content">
      <div class="context">
        <section>
          <h1>Tutku Uçan</h1>
          <small>Full-Stack Web Developer</small>
        </section>
        <section>
          <nuxt-link class="direct-lnk" to="#blog">/blog</nuxt-link>
          <nuxt-link class="direct-lnk" to="#cv">/cv</nuxt-link>
        </section>
        <Footer></Footer>
      </div>
    </div>
    <div class="img-content">
      <img src="/img/kyoraku.png" class="bg-img">
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
main {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  overflow: hidden;
  .content {
    background: rgba(#0000, $alpha: 0.9);
    color: white;
    box-shadow: rgba(#0000, $alpha: 0.9) 150px 0px 150px 150px;
    display: grid;
    place-items: center;
    padding-left: 40px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    height: 100vh;
    margin-top: -15px;
    .context {
      section {
        h1 {
          font-size: 4em;
          margin-bottom: 0px;
        }
        small {
          font-size: 1.2em;
        }
        &:first-child {
          border-bottom: 1px solid rgb(81, 81, 81);
          padding: 15px;
          background: -webkit-linear-gradient(50deg , #e8398b, #ff0f33);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &:nth-child(2) {
          margin-top: 20px;
          & >* {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .img-content {
    position: relative;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    z-index: -1;
  }
}
.bg-img {
  width: 100%;
  height: max-content;
  overflow: hidden;
  opacity: 0.8;
}
.direct-lnk {
  font-size: 24px;
  color: white;
  text-decoration: none;
  transition: 250ms all;
  border-bottom: 2px solid transparent;
  &:hover {
    color: #e8398b;
    border-bottom: 2px solid #e8398b;
  }
}
@media screen and (max-width: 1620px) {
  .bg-img {
    width: fit-content;
    height: fit-content;
  }
}
@media screen and (max-width: 1320px) {
  main {
    grid-template-columns: 50% 50%;
  }
}
@media screen and (max-width: 820px) {
  main {
    grid-template-columns: 100%;
    .content {
      padding-left: 0;
      section {
        &:first-child {
          text-align: center;
        }
        &:nth-child(2) {
          display: flex;
          justify-content: center;
        }
      }
      // background: rgba(#0000, $alpha: 0.9);
    }
  }
}
</style>
