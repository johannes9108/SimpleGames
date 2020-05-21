<template>
  <div class="memoryboard">
    <div class="memorybrick" v-for="n in 32" v-bind:key="n">Test</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.memoryboard {
  height: 95vh;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 1rem;
}

.memorybrick {
  background-color: tomato;
  border: 1px solid lawngreen;
}
</style>