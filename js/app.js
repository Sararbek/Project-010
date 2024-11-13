const dayDate = document.querySelector(".date");
const hour = document.querySelector(".hour");
const dayMonth = document.querySelector(".month");
const dayNumber = document.querySelector(".day");

function getTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let weekday = date.getDay();
  let dayNumbers = date.getDate();
  let month = date.getMonth();

  switch (weekday) {
    case 0:
      dayDate.innerHTML = "Sunday";
      break;
    case 1:
      dayDate.innerHTML = "Monday";
      break;
    case 2:
      dayDate.innerHTML = "Tuesday";
      break;
    case 3:
      dayDate.innerHTML = "Wednesday";
      break;
    case 4:
      dayDate.innerHTML = "Thursday";
      break;
    case 5:
      dayDate.innerHTML = "Friday";
      break;
    case 6:
      dayDate.innerHTML = "Saturday";
  }

  let timeView = `${hours}:${minutes}:${seconds}`;
  hour.innerHTML = timeView;

  dayNumber.innerHTML = `${dayNumbers}`;

  let nameOfMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let i = 0; i < nameOfMonths.length - 1; i++) {
    if ((month = nameOfMonths[i])) {
      dayMonth.innerHTML = nameOfMonths[i];
    }
  }
}

setInterval(() => {
  getTime();
}, 1000);
