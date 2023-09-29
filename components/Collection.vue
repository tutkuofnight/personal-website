<template lang="pug">
.collection
  h1 {{ title }}
  p
    slot(name="description")
  .content 
    slot(name="content")
</template>

<script>
export default {
  props: {
    title: String,
  }
}
</script>

<style lang="scss" scoped>
.collection {
  margin-bottom: 40px;
}
</style>