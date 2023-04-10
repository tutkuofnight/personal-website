<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['track'])
  }
}
</script>
<template lang="pug">
.player 
  img(:src="track.image")
  .content
    small.current-play-text 
      i.fa-brands.fa-spotify.mr-5
      | Currently Playing:
    p {{ track.name }}
    small {{ track.artist }}
</template>

<style lang="scss" scoped>
.player {
  display: flex;
  gap: 10px;
  align-items: center;
  .content {
    display: block;
    small {
      font-size: 12px;
    }
    .current-play-text {
      color: green;
      // font-size: 12px;
      display: flex;
      align-items: center;
      i {
        font-size: 16px;
      }
    }
    p {
      margin-top: 8px;
      margin-bottom: 4px;
    }
  }
}
</style>
