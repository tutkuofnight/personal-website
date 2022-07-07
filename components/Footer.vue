<template lang="pug">
  footer.flex.align-center.justify-center
    a(href="https://www.linkedin.com/in/tutku-u%C3%A7an-610170195/" target="_blank")
      i.bx.bxl-linkedin-square
    a(href="https://github.com/tutklon" target="_blank")
      i.bx.bxl-github
    a(href="https://twitter.com/tutklon" target="_blank")
      i.bx.bxl-twitter
    a(href="https://www.instagram.com/tutklon/" target="_blank")
      i.bx.bxl-instagram
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
footer {
  position: absolute;
  bottom: 0;
  padding: 40px 0px;
  gap:20px;
  i {
    cursor: pointer;
    color: $textColor;
    font-size: 35px;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
}
@media screen and (max-width: 800px){
  footer {
    padding: 40px 0px;
    position: static;
  }
}
</style>