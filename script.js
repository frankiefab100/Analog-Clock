const hourElement = document.querySelector(".hour");
const minElement = document.querySelector(".min");
const secElement = document.querySelector(".sec");

setInterval(updateTime, 1000);

function updateTime() {
  const currentTime = new Date();
  const secs = currentTime.getSeconds();
  const secondsInDegree = (secs / 60) * 360 + 9;

  const mins = currentTime.getMinutes();
  const minutesInDegree = (mins / 60) * 360 + (secs / 60) * 6 + 90;

  const hrs = currentTime.getHours();
  const hoursInDegree = (hrs / 12) * 360 + (mins / 60) * 30 + 90;

  secElement.style.transform = "rotate(" + secondsInDegree + "deg)";
  minElement.style.transform = "rotate(" + minutesInDegree + "deg)";
  hourElement.style.transform = "rotate(" + hoursInDegree + "deg)";
}

updateTime();
