const search = document.querySelector("input");
const lists = document.querySelectorAll("li");

search.addEventListener("keyup", searchList);
function searchList(e) {
  let value = search.value;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].textContent.toLocaleLowerCase().includes(value)) {
      lists[i].style.display = "";
    } else {
      lists[i].style.display = "none";
    }
  }
}
