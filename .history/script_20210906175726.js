const date = new Date();
const renderCalendar = () => {
  const monthDays = document.querySelector(".days");
  const d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDay();
  console.log(lastDayIndex);
  console.log(lastDay);

  const nextDays = 7 - lastDayIndex - 1;
  const months = [
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

  document.querySelector(".date h1").textContent = months[date.getMonth()];
  document.querySelector(".date h2").textContent = date.getFullYear();

  document.querySelector(".date p").textContent = new Date().toDateString();

  let days = "";

  if (lastDayIndex !== 0) {
    for (let x = firstDayIndex + 1; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
    console.log(firstDayIndex - 1, "nie poniedziałek");
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      let div = document.createElement("div");
      div.innerHTML = `<div class="next-date">${j}</div>`;
      monthDays.appendChild(div);
      // days += `<div>${i}</div>`;
    }

    monthDays.innerHTML = days;
  }
  console.log(
    "next days",
    nextDays,
    "last day index",
    lastDayIndex,
    "firstdayindex",
    firstDayIndex,
    "prevlastday",
    prevLastDay,
    "d",
    d.getDay()
  );
  //for (let j = 1; j <= nextDays - 1; j++) {
  if (d.getDay() !== 0) {
    for (let j = 1; j <= 7 - d.getDay(); j++) {
      let div = document.createElement("div");
      div.textContent = `<div class="next-date">${j}</div>`;
      div.className = "next-date";
      monthDays.appendChild(div);
      // days += `<div class="next-date">${j}</div>`;
      //monthDays.innerHTML = days;
    }
  }
};
// date.setDate(1);
// console.log(date.getDay());
// const month = date.getMonth();
// console.log(month);

const prevMonth = document.querySelector(".prev");
const nextMonth = document.querySelector(".next");

prevMonth.addEventListener("click", backToPrevMonth);

document.addEventListener("keydown", function (e) {
  if (e.keyCode == "37") {
    backToPrevMonth();
  }
});

nextMonth.addEventListener("click", goToNextMonth);

document.addEventListener("keydown", function (e) {
  if (e.keyCode == "39") {
    goToNextMonth();
  }
});

function backToPrevMonth() {
  date.setMonth(date.getMonth() - 1);
  console.log("month", date.getMonth());
  renderCalendar();
}

function goToNextMonth() {
  date.setMonth(date.getMonth() + 1);
  console.log("month", date.getMonth());
  renderCalendar();
}

const days = [...document.querySelectorAll(".days div")];
function clickDay(day) {
  days.addEventListener("click", () => {
    day.classList.add("clickedDay");
  });
}
console.log(days);

renderCalendar();
