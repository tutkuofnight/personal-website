<script>
import {mapActions} from 'vuex'
const token = "BQBSwC7BBvWyAGOKc8lpEJNe76onJtS9nI7_88mCJzOnhhE9oTFaFyH_3ukWCCxVFSjc9fHMjpvlQ7r4T0ZUU2LcWmiATakd3_7BhIwJ7Cbced6Fo4Edmvqqhlb9gVrBkMqkhSlndTLSfSOcu6HBn8q6uaxNBFABos9xKLf5xdWO1oDo8Ixov1v3xd0fAQ1pyEfViLInFbJnplWRcG7dKc4i_xVQBMjSgUWeNMy0Im9i8jPTv6Pak8dlTazM2s3HYOc76Z4u7avAkbWnc6I8-F34_nKcCS0Jk8TCPeIkTpoGEJbJs60zoYiQEKVIi8dBQYNx0u4nDxqYkoOenD4AqSHa1Vc7etqLFWnsGX5kcV8wRJY"
export default {
  name: 'IndexPage',
  data(){
    return {
      renderSpotifyComponent: false
    }
  },  
  created(){
    this.currentPlaying()
  },
  methods: {
    ...mapActions(['setCurrentPlaying']),
    currentPlaying(){
      const self = this
      this.$axios.$get('https://api.spotify.com/v1/me/player/currently-playing' , {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        if(!response)
          self.setCurrentPlaying()
        else {
          const data = {
            name: response.item.name,
            image: response.item.album.images[2].url,
            artist: response.item.artists.map(artist => ' ' + artist.name).join(',') 
          }
          self.setCurrentPlaying(data)
        }
        self.renderSpotifyComponent = true
      })
      .catch(err => console.log(err))
      setTimeout(() => this.currentPlaying() , 10000)
    }
  },
}
</script>

<template lang="pug">
#app
  //- img.bg(src="@/static/images/bg2.png")
  profile-header
  spotify(v-if="renderSpotifyComponent")
</template>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  opacity: 0.3;
  background-size: cover;
}
@media (max-width: 768px) {
  .bg {
    width: auto;
  }
}
</style>