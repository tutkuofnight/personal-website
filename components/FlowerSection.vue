<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['app']),
    divisionController() {
      return this.app.theme.division == 4 ? 'flower-small' : 'flower'
    },
  }
}
</script>
<template>
<div class="flower-section">
  <section>
    <span class="linear-text-special special-event-text" v-if="app.theme.special">{{app.theme.special}}</span>
    <h1 class="linear-text">{{ app.theme.flower.name }}</h1>
    <small id="desc" class="linear-text">{{ app.theme.flower.desc }}</small>
  </section>
  <section class="img-list" v-if="app.theme.flower">
    <img
      v-if="app.theme.flower.original"
      :class="divisionController"
      :src="`/img/divisions/${app.theme.name}/flower/${app.theme.flower.original}`"
    />
    <img
      v-if="app.theme.flower.icon_full"
      class="flower"
      :class="divisionController"
      :src="`/img/specials/${app.theme.name}/flower/${app.theme.flower.icon_full}`"
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
</template>

<style lang="scss" scoped>
.flower-section {
  padding-left: 40px;
  #desc {
    padding: 5px 10px;
  }
}
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
@media (max-width: 820px){
  .flower-section {
    padding-left: 0;
    text-align: center;
  }
}
</style>