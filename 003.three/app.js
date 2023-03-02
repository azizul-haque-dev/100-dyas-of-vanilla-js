const code = document.querySelector(".code h3");
const button = document.querySelector("button");

function generateNum() {
  let rand = Math.floor(Math.random() * 10 + 1);
  code.innerText = rand;
}
button.addEventListener("click", generateNum);
generateNum();
