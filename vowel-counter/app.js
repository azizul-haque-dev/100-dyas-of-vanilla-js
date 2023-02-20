const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.querySelector(".result");

btn.addEventListener("click", vowelFinder);
function vowelFinder(e) {
  let num = 0;
  let val = input.value.toLowerCase();

  for (let i = 0; i < val.length; i++) {
    let letter = val[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      num++;
    }
  }
  result.innerText = `${val.toUpperCase()} has ${num} Vowel`;
}
// function countVowel() {
//   let vowelCount = 0;
//   let wordVal = word.value.toLowerCase();

//   for (let i = 0; i < wordVal.length; i++) {
//     let letter = wordVal[i];
//     if (letter.match(/([a,e,i,o,u])/)) {
//       vowelCount++;
//     }
//   }
//   result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
// }
