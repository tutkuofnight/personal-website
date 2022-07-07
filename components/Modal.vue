<script>
export default {
  name: 'Modal',
  props: ['notepad']
}
</script>
<template lang="pug">
  .background
    .modal
      header
        i.bx.bx-x.close-btn.p-1(@click="$emit('closeModal' , false)")
      main
        nuxt-content(:document="notepad")
</template>

<style lang="scss" scoped>
@import '../static/css/veriables';
.background {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: black;
  display: grid;
  place-items: center;
  position: absolute;
  z-index: 10;
}
.modal {
  background: $contentColor;
  border-radius: $borderRadius;
  padding: 20px;
  width: 50%;
  max-width: 60%;
  header {
    display: flex;
    justify-content: flex-end;
  }
}
.close-btn {
  border-radius: 50%;
  font-size: 40px;
  cursor: pointer;
  &:hover {
    background: rgba($contentColor, 0.7);
  }
}
</style>