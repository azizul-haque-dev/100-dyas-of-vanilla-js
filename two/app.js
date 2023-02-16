const code = document.querySelector(".code");
const button = document.querySelector("button");
window.addEventListener("load", generator);

function generator() {
  let randColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = `#${randColor}`;
  code.innerText = `#${randColor}`;
}
button.addEventListener("click", generator);
