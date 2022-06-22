<template lang="pug">
div
  img(src="@/static/img/ichigo.gif")
  h2 Sanırım Şu anda buralar biraz ıssız..
  NuxtLink(to="/") Geri dönelim
</template>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    padding: 10px;
  }
  h2 {
    color: lightgray;
    text-align: center;
  }
  a {
    color: lightgray;
  }
}
</style>