<template>
  <div class="col-3">
    <h1>BlogCard</h1>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    article: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped lang="scss">

</style>
