const button = document.getElementById('stop-btn');

function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}

function showTime() {
  const currentTime = new Date();
  const hours = formatNumber(currentTime.getHours());
  const minutes = formatNumber(currentTime.getMinutes());
  const seconds = formatNumber(currentTime.getSeconds());
  
  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time").innerText = time;
  console.log(time);
}


showTime();
let interval = setInterval(showTime, 1000);

let isRunning = true;

button.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
    button.innerText = "Resume Timer";
    button.classList.add("resume");
  } else {
    showTime();
    interval = setInterval(showTime, 1000);
    isRunning = true;
    button.innerText = "Stop Timer";
    button.classList.remove("resume");
  }
});