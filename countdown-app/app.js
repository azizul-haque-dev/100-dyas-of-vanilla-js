const btn = document.getElementById("btn");
const date = document.getElementById("date");
const time = document.getElementById("time");
function updateTimer(e) {
  let timeVal = time.value;
  let dateVal = date.value;
  let val = `${dateVal} ${timeVal}:00`;
  let future = new Date(val);
  let now = new Date();
  let diff = (future - now) / 1000;

  let days = Math.floor(diff / 3600 / 24);

  let hours = Math.floor((diff / 3600) % 24);
  let mins = Math.floor((diff / 60) % 60);
  let secs = Math.floor(diff % 60);
  document.getElementById(
    "count"
  ).innerHTML = `<div> ${days} <span>days</span></div><div>${hours} <span>hours</span></div><div> ${mins} <span>minutes</span></div><div> ${secs} <span>seconds</span></div>`;
}

btn.addEventListener("click", function () {
  updateTimer();
  setInterval(() => {
    updateTimer();
  }, 1000);
});
