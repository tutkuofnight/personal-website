<script>
export default {
  name: 'CvPage',
}
</script>
<template lang="pug">
.container
  Empty
</template>
<style lang="scss" scoped>
.profile-image {
  width: 250px;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
}
.card {
  width: 50%;
  background: whitesmoke;
  padding: 100px;
  border-radius: 10px;
  display: flex;
  gap: 40px;
  position: absolute;
  top: 20%;
  left: 20%;
}
.content {
  padding-left: 100px;
  p {
    font-size: 1.25rem;
  }
}
</style>
