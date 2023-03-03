const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector(".result span");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputLe = input.value;
  console.log();
  result.innerHTML = inputLe;
});
