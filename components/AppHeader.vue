<template lang="pug">
  nav
    .back-btn(@click="$router.go(-1)")
      i.bx.bx-arrow-back
      p Geri
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
nav {
  position: sticky;
  top: 0;
  .back-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    color: $textColor;
    margin-left: 5px;
    padding: 0px 10px;
    background: $backgroundColor;
  }
}
</style>