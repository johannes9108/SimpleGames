<template>
  <div class="container">
    <GameHeader title="Memory" />
    <nav class="gameOptions">
      <!-- Add option to pick your own pictures/colors -->
      <div>
        <label for>Number of bricks</label>
        {{size}}
        <ul>
          <li>
            <label for>8</label>
            <input name="size" type="radio" value="8" v-model="size" />
          </li>
          <li>
            <label for>16</label>
            <input name="size" type="radio" value="16" v-model="size" />
          </li>
          <!-- <li>
            <label for>32</label>
            <input name="size" type="radio" value="32" v-model="size" />
          </li>-->
        </ul>
      </div>
      <div>
        <button @click="startGame()">Start</button>
        <button @click="preGame()">Reset</button>
      </div>
      <table>
        <tr>
          <th>Turns</th>
          <th>Score</th>
          <th>Avg</th>
        </tr>
        <tr>
          <td>{{turns}}</td>
          <td>{{score}}</td>
          <td>{{score}}</td>
        </tr>
      </table>
    </nav>

    <GameBoard
      v-if="currentState!='FINISHED'"
      @gameFinishedEvent="gameFinishedHandler"
      @increaseScoreEvent="score++"
      @increaseTurnEvent="turns++"
      :currentState="currentState"
      :score="score"
      :turns="turns"
      :size="size"
      :bricks="arrangeBricks"
    />
    <div v-else class="endState">
      <h1>Game Finished!</h1>
      <h2>You ended the game with</h2>
      <table>
        <tr>
          <th>Score</th>
          <th>Turns</th>
          <th>Avg</th>
        </tr>
        <tr>
          <td>{{score}}</td>
          <td>{{turns}}</td>
          <td>{{parseInt(score/turns)}}</td>
        </tr>
      </table>
      <p>Game Resets in: {{countDown}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import memoryboard from "../components/memoryboard";
import GameHeader from "../components/header";

var _ = require("lodash");
export default {
  name: "Memory",
  components: {
    GameBoard: memoryboard,
    GameHeader
  },
  data() {
    return {
      states: ["PREGAME", "RUNNING", "FINISHED"],
      currentState: "PREGAME",
      score: 0,
      turns: 0,
      bricks: [
        { id: 1, color: "red", selected: false, isHidden: true, hover: false },
        { id: 2, color: "blue", selected: false, isHidden: true, hover: false },
        {
          id: 3,
          color: "green",
          selected: false,
          isHidden: true,
          hover: false
        },
        {
          id: 4,
          color: "magenta",
          selected: false,
          isHidden: true,
          hover: false
        },
        { id: 5, color: "cyan", selected: false, isHidden: true, hover: false },
        {
          id: 6,
          color: "brown",
          selected: false,
          isHidden: true,
          hover: false
        },
        { id: 7, color: "teal", selected: false, isHidden: true, hover: false },
        {
          id: 8,
          color: "tomato",
          selected: false,
          isHidden: true,
          hover: false
        },
        {
          id: 9,
          color: "yellow",
          selected: false,
          isHidden: true,
          hover: false
        },
        {
          id: 10,
          color: "yellowgreen",
          selected: false,
          isHidden: true,
          hover: false
        },
        {
          id: 11,
          color: "orange",
          selected: false,
          isHidden: true,
          hover: false
        },
        {
          id: 12,
          color: "chocolate",
          selected: false,
          isHidden: true,
          hover: false
        },
        {
          id: 13,
          color: "burlywood",
          selected: false,
          isHidden: true,
          hover: false
        },
        {
          id: 14,
          color: "lightblue",
          selected: false,
          isHidden: true,
          hover: false
        },
        {
          id: 15,
          color: "lightgray",
          selected: false,
          isHidden: true,
          hover: false
        },
        {
          id: 16,
          color: "cadetblue",
          selected: false,
          isHidden: true,
          hover: false
        }
      ],
      reactiveArr: [],
      countDown: 5,
      size: "8",
      intervalId: 0
    };
  },
  watch: {
    size() {
      console.log("watch");
      this.reactiveArr.splice(this.size * 2);
    }
  },
  computed: {
    arrangeBricks() {
      console.log("Computed");
      // console.log("Size: " + this.size);
      let copy = [...this.bricks];
      let res = [];

      for (let x = 0; x < this.size; x++) {
        let index = Math.floor(Math.random() * copy.length);
        res.push(_.cloneDeep(copy[index]));
        res.push(_.cloneDeep(copy[index]));
        copy.splice(index, 1);
      }

      for (let x = 0; x < res.length; x++) {
        this.$set(this.reactiveArr, x, res[x]);
      }

      return this.reactiveArr;
    }
  },
  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    startGame() {
      this.currentState = this.states[1];
    },
    preGame() {
      this.currentState = this.states[0];
      this.turns = 0;
      this.score = 0;
      this.size = "0";
      this.size = "8";
      // this.reactiveArr.splice(this.size * 2);
    },
    gameFinishedHandler() {
      this.currentState = "FINISHED";

      this.intervalId = setInterval(() => {
        console.log("intervall");
        this.countDown--;
        if (this.countDown == 0) {
          this.countDown = 5;
          this.preGame();
          clearInterval(this.intervalId);
        }
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: yellowgreen;
  display: grid;
  // grid-template-columns: 1fr;
  grid-template-rows: 5vh 5vh 80vh;
  // flex-direction: column;
  background-color: black;
  // grid-template-areas: "header" "nav" "gameboard";
}
nav {
  ul {
    li {
      display: inline;
    }
  }
  // grid-area: nav;
  // display: flex;
  // grid-template-columns: repeat(3, 1fr);
  // justify-content: space-between;

  // background-color: burlywood;
}
.gameOptions {
  background-color: red;
  display: flex;
}

.endState {
  text-align: center;
  display: flex;
  flex-direction: column;
  // align-items: center;
  background-color: white;
  border-radius: 5px;
  width: 20%;
  height: 50%;
  margin: auto;
  h1 {
    // background-color: red;
    border-bottom: 1px solid black;
  }
  table {
    align-self: center;
  }
}
</style>
