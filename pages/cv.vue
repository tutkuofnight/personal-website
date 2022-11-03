<script>
export default {
  name: 'CvPage',
  head(){
    return {
      title: "CV | Tutku Uçan"
    }
  },
}
</script>

<template lang="pug">
.container
  br
  br
  h2 Don't worry! still developing 😊
  .cv-content
    img(src="/img/CV.svg")
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  color: whitesmoke;
}
.cv-content {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 50px;
  img {
    border-radius: 5px;
    box-shadow: rgb(43, 43, 43) 0px 0px 30px 0px;
  }
}
</style>
