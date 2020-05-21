<template>
  <div class="container">
    <GameHeader title="Memory" />
    <GameBoard />
  </div>
</template>

<script>
// @ is an alias to /src
import header from "../components/header";
import memoryboard from "../components/memoryboard";
export default {
  name: "Memory",
  components: {
    GameHeader: header,
    GameBoard: memoryboard
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: royalblue;
}
</style>
