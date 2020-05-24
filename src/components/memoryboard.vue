<template>
  <div class="memoryboard">
    <div
      @mouseover="brick.hover = true"
      @mouseleave="brick.hover = false"
      v-for="(brick,index) in localBricks"
      v-bind:key="index"
      :style="brick.isHidden?{backgroundColor: 'black'}:{backgroundColor: brick.color}"
      :class="[(localBricks[index].selected) ?'reveal':'hide' , {highlight: brick.hover}]"
      @click="select(index,brick.id)"
      class="memorybrick"
    >{{brick.id}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hover: false,
      selectCount: 0,
      prevSelected: undefined,
      localBricks: this.bricks,
      busyFlag: false,
      revealStyling: {
        animationName: "revealBrick",
        animationDuration: "3s",
        animationFillMode: "forwards"
      }
    };
  },
  props: {
    size: String,
    bricks: Array,
    turns: Number,
    score: Number,
    currentState: String
  },
  methods: {
    select(index, brickId) {
      console.log("Index: " + index);
      console.log("Brick: " + brickId);
      // this.currentState == "RUNNING" Add this to the condition for working state management
      if (!this.localBricks[index].selected && !this.busyFlag) {
        this.localBricks[index].isHidden = false;
        this.selectCount++;
        this.localBricks[index].selected = true;

        if (this.prevSelected != undefined) {
          if (this.prevSelected.id == brickId) {
            this.$emit("increaseScoreEvent");
            console.log("Found pair!");
            this.localBricks = this.localBricks.filter(
              brick => brick.id != brickId
            );
            this.prevSelected = undefined;
          } else {
            this.busyFlag = true;
            setTimeout(() => {
              console.log("Chilling for 3sec");
              this.localBricks[index].selected = false;
              this.prevSelected.selected = false;
              this.prevSelected.isHidden = true;
              this.prevSelected = undefined;
              this.localBricks[index].isHidden = true;
              this.busyFlag = false;
            }, 3500);
          }
          this.$emit("increaseTurnEvent");
          // console.log(this.localBricks);
        } else {
          this.prevSelected = this.localBricks[index];
        }
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.memoryboard {
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 1rem;
}

.memorybrick {
  // background-color: tomato;
  // border: 1px solid white;
  box-shadow: 0 0 10px gray;
  border-radius: 2%;
}
.reveal {
  // border: 2px solid black;
  animation-name: revealBrick;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  // animation-timing-function: linear;
}
@keyframes revealBrick {
  0% {
  }
  50% {
    transform: scale(1.05);
    // border: 10px solid white;
  }
  100% {
    box-shadow: 0 0 10px white;
    transform: rotateY(180deg) scale(1.05);
  }
}
.hide {
  animation-name: hideBrick;
  animation-duration: 1sec;
}

@keyframes hideBrick {
  0% {
    background-color: red;
    box-shadow: 0 0 10px white;
    transform: rotateY(180deg) scale(1.05);
  }
  50% {
    // border: 10px solid white;
  }
  100% {
    transform: rotateY(-180deg) scale(1);
    box-shadow: 0 0 10px gray;
  }
}
.highlight {
  // box-shadow: 5px 5px 15px white;
}
</style>