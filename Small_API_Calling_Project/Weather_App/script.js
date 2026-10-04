const button = document.getElementById("Search-button");
const input = document.getElementById("city-input");
const CityName = document.getElementById("city-name");
const CityTime = document.getElementById("city-time");
const CityTemp = document.getElementById("city-temp");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=e5a5a3083d6d48ac923181523260410&q=${cityName}&aqi=yes`,
  );
  return await promise.json();
}

button.addEventListener("click", async() => {
  const value = input.value;
  const result = await getData(value);
  CityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
  CityTime.innerText = `${result.location.localtime}`
  CityTemp.innerText = `${result.current.temp_c}`
});
