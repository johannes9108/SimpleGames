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
#nav {
  height: 5vh;
  // padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e8f765;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #e4f1ec;
    }
  }
}
</style>