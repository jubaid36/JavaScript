# Weather App

A lightweight, beginner-friendly web application that allows users to search for any city and view its current weather information in real time. The app fetches live data from the WeatherAPI service using asynchronous JavaScript and displays the location details, local time, and current temperature.

---

## Features

- **Live Weather Search:** Search for any city or region worldwide.
- **Location Details:** Displays the city name, region/state, and country.
- **Local Time:** Shows the current local date and time of the searched location.
- **Temperature Display:** Fetches and displays real-time temperature in degrees Celsius (°C).
- **Clean & Responsive UI:** Minimalist, balanced styling that works on desktops and mobile devices.

---

## Technologies Used

- **HTML5:** Semantic markup and structure for input and display elements.
- **CSS3:** Clean layout, flexbox alignment, and modern typography.
- **JavaScript (ES6+):** DOM manipulation, event listeners, and asynchronous data fetching using `fetch()` and `async/await`.
- **WeatherAPI:** External REST API for retrieving real-time weather data.

---

## Project Structure

```text
weather-app/
│
├── index.html       # Main HTML markup and user interface
├── style.css        # Styling, layout, and visual presentation
├── script.js        # API call handling and DOM updates
└── README.md        # Project documentation
```

---


## Configuration & API Key

The application retrieves weather data from [WeatherAPI](https://www.weatherapi.com/).

The request is handled in `script.js`:
```javascript
async function getData(cityName) {
  const promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}
```

> **Note:** If you wish to use your own API key:
> 1. Sign up for a free account at [WeatherAPI](https://www.weatherapi.com/).
> 2. Copy your personal API key from your dashboard.
> 3. Replace the key parameter in `script.js` with your own key.

---

## Preview

```text
+------------------------------------------+
|  [ Enter City Name           ] [Search]  |
+------------------------------------------+
|  London, City of London, United Kingdom  |
|  2026-10-05 08:30                        |
|  16°C                                    |
+------------------------------------------+
```
*(You can also add a screenshot of your app here by placing an image file in your repository and linking it as `![Weather App Screenshot](screenshot.png)`).*

---

## License

This project is open-source and free to use for personal or educational purposes.