const amount = document.querySelector("#bill");
const parcent = document.querySelector("#rate");
const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip span");
const total = document.querySelector(".total span");
function calculate() {
  let tipVal = +parcent.value;
  let bill = +amount.value;
  let tipAmount = (amount.value * tipVal) / 100;
  let totalAmount = bill + tipAmount;
  tip.innerHTML = "$" + tipAmount;
  total.innerHTML = "$" + totalAmount;
  document.querySelector("form").reset();
  amount.value = "";
}
btn.addEventListener("click", calculate);
