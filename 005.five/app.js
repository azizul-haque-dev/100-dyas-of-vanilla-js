const input = document.querySelector("input");
const alert = document.querySelector(".alert-info");
const button = document.querySelector("button");

function valReverse() {
  let val = input.value.toLocaleLowerCase();
  let result = val.split("").reverse().join("");
  if (val == result) {
    alert.innerText = "The word is a Palindrome";
  } else {
    alert.innerText = "The word is not a Palindrome";
  }
}
button.addEventListener("click", valReverse);
