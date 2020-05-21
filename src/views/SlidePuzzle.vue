<template>
  <div class="slidePuzzle">
    <GameHeader title="SlidePuzzle" />
  </div>
</template>

<script>
// @ is an alias to /src
import header from "../components/header";
export default {
  name: "SlidePuzzle",
  components: {
    GameHeader: header
  },
  created() {
    console.log(this);
  }
};
</script>
<style lang="scss" scoped>
</style>
