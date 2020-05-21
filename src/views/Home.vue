<template>
  <div class="home">
    <div id="nav">
      <router-link :to="{name: 'Memory'}">Memory</router-link>|
      <router-link to="/SlidePuzzle">Slide Puzzler</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang='scss' scoped>
</style>