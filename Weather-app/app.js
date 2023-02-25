const api = {
  key: "28fd15358cdecbc1a1dfef367e71acef",
  base: "https://api.openweathermap.org/data/2.5/",
};
const icon = document.querySelector(".icon");

const temp = document.querySelector(".temperature");
const tempSpan = document.querySelector(".temperature span");
const search = document.getElementById("search");
const btn = document.getElementById("btn");
btn.addEventListener("click", getValue);
function getValue(e) {
  e.preventDefault();

  if (e.type == "click") {
    if (icon.hasChildNodes()) {
      icon.removeChild(icon.children[0]);
    }
    getData(search.value);
  }
}

function getData() {
  fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then((response) => {
      return response.json();
    })
    .then(displayData);
}
function displayData(res) {
  console.log(res);
  if (res.cod == "404" || search.value == "") {
    alert("Please enter a city name");
    search.value = "";
  } else {
    const city = document.querySelector(".place");
    const img = document.createElement("img");

    icon.style.display = "block";

    icon.appendChild(img);
    if (img.src !== "") {
      img.src = "";
    } else {
      img.src = `img/${res.weather[0].main}.png`;
    }
    const weather = document.querySelector(".weatherCondition");
    weather.innerText = `${res.weather[0].main}`;
    city.innerText = `${res.name}, ${res.sys.country}`;
    temp.innerHTML = `${Math.round(res.main.temp)}°<span>C</span>`;
    const today = new Date();
    const date = document.querySelector(".date");
    date.innerText = dateFunction(today);
  }
}
function dateFunction(d) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}
