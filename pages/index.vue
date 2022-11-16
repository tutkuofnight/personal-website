<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      flowerSection: false,
      isLoading: {
        content: true,
        img: true,
      },
      preview: false,
    }
  },
  methods: {
    imgLoad() {
      this.isLoading.img = false
    },
  },
  computed: {
    ...mapState(['app', 'developer']),
    divisionController() {
      return this.app.theme.division == 4 ? 'flower-small' : 'flower'
    },
  },
  mounted() {
    if (this.$route.query.flowerSection == 'true') this.flowerSection = true
    console.log(`Developed by ${this.developer.fullname} 🌺`)
    this.isLoading.content = false
  },
}
</script>

<template>
  <main>
    <transition name="loading-fade">
      <Loading v-if="isLoading.img && isLoading.content"></Loading>
    </transition>

    <button @click="preview = !preview" class="preview-btn">
      <i :class="{ 'bx bxs-color': !preview, 'bx bx-color': preview }"></i>
    </button>
    <div class="content" :class="{'leave' : preview}">
      <transition name="fade">
        <div v-show="!preview">
          <div class="flower-btn" @click="flowerSection = !flowerSection">
            <img
              class="flower-icon"
              :src="app.theme.special ? `/img/specials/${app.theme.name}/${app.theme.flower.icon}` : `/img/divisions/${app.theme.division}/flower/${app.theme.flower.icon}`"
              alt=""
            />
          </div>
          <div class="context">
            <div class="flower-section" v-if="flowerSection">
              <section>
                <span class="linear-text-special special-event-text" v-if="app.theme.special">{{app.theme.special}}</span>
                <h1 class="linear-text">{{ app.theme.flower.name }}</h1>
                <small id="desc" class="linear-text">{{ app.theme.flower.desc }}</small>
              </section>
              <section class="img-list" v-if="app.theme.flower">
                <img
                  v-if="app.theme.flower.original"
                  style="flex: 1"
                  :class="divisionController"
                  :src="`/img/divisions/${app.theme.division}/flower/${app.theme.flower.original}`"
                />
                <img
                  v-if="app.theme.flower.icon_full"
                  class="flower"
                  :class="divisionController"
                  :src="`/img/divisions/${app.theme.division}/flower/${app.theme.flower.icon_full}`"
                />
              </section>
              <a
                class="redirect-link"
                :href="app.theme.special ? app.theme.url : 'https://github.com/tutklon/personal-website#theme-'"
                target="_blank"
                rel="noopener noreferrer"
                >{{app.theme.special ? "Click about what is today's special " : 'Click about flowers and theme'}}</a
              >
            </div>
            <template v-else>
              <section>
                <h1 class="linear-text">{{ developer.fullname }}</h1>
                <small class="linear-text">{{ developer.title }}</small>
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
      </transition>
    </div>
    <div class="img-content">
      <img
        @load="imgLoad"
        :src="app.theme.special ? `/img/specials/${app.theme.name}/${app.theme.background}` : `/img/divisions/${app.theme.division}/${app.theme.background}`"
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
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-top: -15px;
    transition:300ms all;
    &.leave {
      background: rgba(#0000, $alpha: 0);
      color: white;
      box-shadow: rgba(#0000, $alpha: 0) 0px 0px 0px 0px;
    }
    .context {
      padding-left: 40px;
      section {
        span {
          font-size: 1.1em;
        }
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
          padding-left: 0px;
          h1 {
            margin-top: 20px;
          }
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
.preview-btn {
  position: absolute;
  bottom: 3%;
  right: 2%;
  border-radius: 4px;
  padding: 8px;
  background: rgba(black, 0.4);
  font-size: 25px;
  display: grid;
  place-items: center;
  color: white;
  cursor: pointer;
  transition: 250ms all;
}
.bg-img {
  width: 100%;
  height: max-content;
  overflow: hidden;
  opacity: 0.8;
}
.flower-section {
  padding-left: 40px;
  #desc {
    padding: 5px 10px;
  }
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
      .context {
        padding-left: 0;
      }
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
  .flower-section {
    padding-left: 0;
    text-align: center;
  }
}
.img-list {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

</style>
