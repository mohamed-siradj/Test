function showTime() {
  let date = new Date();
  let hour = date.getHours(); // 0 - 23
  let min = date.getMinutes(); // 0 - 59
  let sec = date.getSeconds(); // 0 - 59
  let session = "AM";

  if (hour == 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
    session = "PM";
  }

  hour = (hour < 10) ? "0" + hour : hour;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;

  let time = hour + ":" + min + ":" + sec + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();