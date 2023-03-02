// variable is here
const btn = document.getElementById("btn");
const input = document.getElementById("input");

const copyMe = (e) => {
  e.preventDefault();
  input.select();
  input.setSelectionRange(0, 999999);
  document.execCommand("copy");
  btn.textContent = "Copied";
  setTimeout(() => {
    btn.textContent = "Copy";
  });
};
btn.addEventListener("click", copyMe);
