const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
btn.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(getPosition);
});
function getPosition(position) {
  result.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
