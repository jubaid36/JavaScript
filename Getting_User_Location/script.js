const button = document.getElementById("get-location-button");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=e5a5a3083d6d48ac923181523260410&q=${lat}, ${long}&aqi=yes`,
  );
  return await promise.json();
}

async function getlocation(position) {
  const result = await getData(position.coords.latitude, position.coords.longitude);
  console.log(result);
}

function failedToGet() {
  console.log("There was a problem");
}

button.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(getlocation, failedToGet);
});