<template lang="pug">
  footer
    a(href="https://www.linkedin.com/in/tutku-u%C3%A7an-610170195/" target="_blank")
      i.bx.bxl-linkedin-square
    a(href="https://github.com/tutklon" target="_blank")
      i.bx.bxl-github
    a(href="mailto:tutkuucan369@gmail.com" target="_blank")
      i.bx.bx-envelope
    a(href="https://twitter.com/tutklon" target="_blank")
      i.bx.bxl-twitter
    a(href="https://www.instagram.com/kral.tutku/" target="_blank")
      i.bx.bxl-instagram
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
footer {
  position: absolute;
  bottom: 0;
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  gap:20px;
  align-items: center;
  i {
    cursor: pointer;
    color: white;
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
    position: absolute;
    bottom: 0;
  }
}
</style>
