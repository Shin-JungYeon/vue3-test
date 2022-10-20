<template>
  <div class="content-wrap">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>
.content-wrap {
  flex: 2;
}
</style>