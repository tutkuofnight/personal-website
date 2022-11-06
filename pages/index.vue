<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      flowerSection: false,
      isLoading: {
        content: true,
        img: true,
      },
    }
  },
  methods: {
    ...mapGetters(['getDeveloperName']),
    imgLoad() {
      this.isLoading.img = false
    },
  },
  computed: {
    ...mapState(['app']),
    divisionController() {
      return this.app.theme.division == 4 ? 'flower-small' : 'flower'
    },
  },
  mounted() {
    if(this.$route.query.flowerSection == "true")
      this.flowerSection = true
    console.log('developed by Tutku Uçan 🌺')
    this.isLoading.content = false
  },
}
</script>

<template>
  <main>
    <transition name="loading-fade">
      <Loading v-if="isLoading.img && isLoading.content"></Loading>
    </transition>
    <div class="flower-btn" @click="flowerSection = !flowerSection">
      <img
        class="flower-icon"
        :src="`/img/divisions/${app.theme.division}/flower/${app.theme.flower.icon}`"
        alt=""
      />
    </div>
    <div class="content">
      <div class="context">
        <template v-if="flowerSection">
          <section>
            <h1 class="linear-text">{{ app.theme.flower.name }}</h1>
            <small class="linear-text">{{ app.theme.flower.desc }}</small>
          </section>
          <section class="img-list">
            <img
              class="flower"
              :class="divisionController"
              :src="`/img/divisions/${app.theme.division}/flower/${app.theme.flower.icon_full}`"
            />
            <img
              style="flex: 1;"
              :class="divisionController"
              :src="`/img/divisions/${app.theme.division}/flower/${app.theme.flower.img}`"
            />
          </section>
          <a class="redirect-link" href="https://github.com/tutklon/personal-website#theme-" target="_blank" rel="noopener noreferrer">Click about flowers and theme</a>
        </template>
        <template v-else>
          <section>
            <h1 class="linear-text">{{ getDeveloperName() }}</h1>
            <small class="linear-text">Full-Stack Web Developer</small>
          </section>
          <section>
            <button class="direct-lnk disabled" to="#blog">/blog</button>
            <nuxt-link class="direct-lnk" to="/cv">/cv</nuxt-link>
            <button class="direct-lnk disabled" to="#universe">
              /universe
            </button>
          </section>
          <footer>
            <Contact />
          </footer>
        </template>
      </div>
    </div>
    <div class="img-content">
      <img
        @load="imgLoad"
        :src="`/img/divisions/${app.theme.division}/${app.theme.background}`"
        class="bg-img"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
button {
  border: none;
  background: none;
}
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
        }
        &:nth-child(2) {
          margin-top: 20px;
          & > * {
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
  &.disabled {
    color: rgb(146, 146, 146);
    border-bottom: none;
    &:hover {
      cursor: not-allowed;
    }
  }
}
.bg-img {
  width: 100%;
  height: max-content;
  overflow: hidden;
  opacity: 0.8;
}
@media screen and (max-width: 1400px) {
  .bg-img {
    width: fit-content;
    height: fit-content;
  }
}
@media screen and (max-width: 1320px) and (orientation: portrait) {
  main {
    grid-template-columns: 50% 50%;
  }
  .bg-img {
    height: 100vh;
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
  .flower-icon {

  }
}
.img-list {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
