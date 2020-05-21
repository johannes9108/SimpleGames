<template>
  <header>
    <router-link to="/">Home</router-link>
    <h1>{{title}}</h1>
    <div></div>
  </header>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang='scss' scoped>
header {
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: turquoise;
}
a {
  text-decoration: none;
}
</style>