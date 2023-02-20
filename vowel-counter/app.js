const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.querySelector(".result");

btn.addEventListener("click", vowelFinder);
function vowelFinder(e) {
  let num = 0;
  let val = input.value.toLowerCase();
  let vowelWord = /[a,e,i,o,u']/gi;

  for (let i = 0; i < val.length, i++; ) {
    let letter = val[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      num++;
    }
  }
  result.innerText = `${val.toUpperCase()} has ${num} Vowel`;
}
