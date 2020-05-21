<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #7196bb;
  height: 100vh;
}

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
