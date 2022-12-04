<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      data: {
        word: "Despair",
        mean: "Çaresizlik"
      },
      seeMean: false
    }
  },
  computed: {
    ...mapState(['words'])
  },
  methods: {
    randomWord(){
      this.data = this.words[Math.floor(Math.random() * this.words.length)]
      this.seeMean = false
    }
  },
  created(){
    this.randomWord()
  }
}
</script>

<template lang="pug">
  .background
    .modal-border
      .modal
        header
          a(@click="$emit('closeModal' , false)")
            i.bx.bx-x
        section
          h1 {{data.word}}
          p.mean(@click="seeMean = !seeMean") {{seeMean ? data.mean : "Click to see turkish mean"}}
          button(@click="randomWord") Give me another word
        footer
          small English Practice! You will see random english words that i wrote every time to click. Well, you just should guess
</template>

<style lang="scss" scoped>
.background {
  background-color: rgba(black, 0.7);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  z-index: 30;
  display: grid;
  place-items: center;
  .modal-border {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: -webkit-linear-gradient(50deg , #e8398b, #ff0f33);
    width: 600px;
    height: 400px;
    border-radius: 12px;
    padding: 2px;
    .modal {
      background: black;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      color: white;
      position: relative;
      padding: 5px;
      padding-bottom: 10px;
      header {
        display: flex;
        justify-content: flex-end;
        a {
          padding: 5px;
          cursor: pointer;
          &:hover {
            i {
              background: -webkit-linear-gradient(50deg , #e8398b, #ff0f33);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          i {
            font-size: 2rem;
          }
        }
      }
      section {
        width: 100%;
        height: 70%;
        display: grid;
        place-items: center;

        h1 {
          margin-bottom: -20px;
          font-size: 2.5rem;
        }
        .mean {
          color: rgb(255, 131, 125);
          cursor: pointer;
        }
        button {
          margin-bottom: -10px;
          background: none;
          padding: 10px 20px;
          color: whitesmoke;
          cursor: pointer;
          border: 2px solid lightgray;
          transition: 300ms all;
          border-radius: 10px;
          &:hover {
            border-radius: 0px;
            border-color: #e8398b;
          }
          &:active {
            color: lightgray;
          }
        }
      }
      footer {
        padding: 20px 50px;
        text-align: center;
        width: 100%;
        display: flex;
        justify-content: center;
        color: lightgray;
        position: absolute;
        bottom: 0;
      }
    }
  }
}
@media screen and (max-width: 820px) {
  .background {
    .modal-border {
      width: 80%;
      height: 400px;
      .modal {
        section {
          h1 {
            margin-bottom: -60px;
          }
          p {
            margin-bottom: -40px;
          }
        }
      }
    }
  }
}
</style>