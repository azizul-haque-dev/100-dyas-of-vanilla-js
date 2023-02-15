const result = document.getElementById("result");
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const app = document.querySelector(".app");
let count = 0;
result.innerText = count;
increment.addEventListener("click", function (e) {
  count++;
  console.log(count);
  result.innerText = count;
});
decrement.addEventListener("click", function (e) {
  count--;
  console.log(count);
  result.innerText = count;
});
