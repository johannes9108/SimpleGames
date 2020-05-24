const bricks = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "green" },
  { id: 4, color: "magenta" },
  { id: 5, color: "cyan" },
  { id: 6, color: "brown" },
  { id: 7, color: "teal" },
  { id: 8, color: "tomato" },
  { id: 9, color: "yellow" },
  { id: 10, color: "yellowlime" },
  { id: 11, color: "orange" },
  { id: 12, color: "chocolate" },
  { id: 13, color: "burlywood" },
  { id: 14, color: "lightblue" },
  { id: 15, color: "lightgray" },
  { id: 16, color: "cadetblue" },
];

// let newArr = [];
for (let x = 0; x < 8; x++) {
  let index = Math.floor(Math.random() * bricks.length);
  let select = bricks[index];
  bricks.splice(index, 1);
  console.log(select);
}
