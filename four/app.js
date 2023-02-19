const btn = document.querySelector("button"),
  a = document.querySelector("a"),
  modal = document.querySelector(".text-container");

btn.addEventListener("click", show);
a.addEventListener("click", hide);

function show() {
  modal.style.display = "block";
}
function hide() {
  modal.style.display = "none";
}
