<template lang="pug">
div
  img(src="@/static/img/ichigo.gif")
  h2 Sanırım Şu anda buralar biraz ıssız..
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    padding: 10px;
  }
  h2 {
    color: $textColor;
    text-align: center;
  }
  a {
    color: $textColor;
  }
}
</style>