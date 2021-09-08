// const monthDays = document.querySelector(".days");
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
    date.getMonth() + 1,
    0
  ).getDay();
  const lastDayCurrentIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  console.log({ firstDayIndex });
  console.log({ lastDayIndex });
  console.log({ lastDay });
  console.log({ lastDayCurrentIndex });

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

  // monthDays = "";
  //let days = "";

  monthDays.replaceChildren();
  console.log({ prevLastDay });
  console.log({ firstDayIndex });
  if (firstDayIndex !== 0) {
    for (let x = firstDayIndex - 1; x > 0; x--) {
      const div = document.createElement("div");
      div.textContent = prevLastDay - x + 1;
      div.className = "prev-date";
      monthDays.appendChild(div);
      //days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
    //  console.log(firstDayIndex - 1, "nie poniedziałek");
  } else {
    for (let x = firstDayIndex - 1; x > -7; x--) {
      const div = document.createElement("div");
      div.textContent = prevLastDay - x + 1;
      div.className = "prev-date";
      monthDays.appendChild(div);
    }
  }

  for (let i = 1; i < lastDay + 1; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      const div = document.createElement("div");
      div.textContent = i;
      div.className = "today clickedDay";
      monthDays.appendChild(div);
      //days += `<div class="today">${i}</div>`;
    } else {
      let div = document.createElement("div");
      div.textContent = i;
      monthDays.appendChild(div);
      // days += `<div>${i}</div>`;
    }

    //monthDays.innerHTML = days;
  }
  // console.log(
  //   "next days",
  //   nextDays,
  //   "last day index",
  //   lastDayIndex,
  //   "firstdayindex",
  //   firstDayIndex,
  //   "prevlastday",
  //   prevLastDay,
  //   "d",
  //   d.getDay()
  // );
  //for (let j = 1; j <= nextDays - 1; j++) {

  //if (d.getDay() !== 0) {
  for (let j = 1; j <= 7 - d.getDay(); j++) {
    console.log(d.getDay(), j);
    if (firstDayIndex !== 5) {
      let div = document.createElement("div");
      div.textContent = j;
      div.className = "next-date";
      monthDays.appendChild(div);
    }
    // days += `<div class="next-date">${j}</div>`;
    //monthDays.innerHTML = days;
  }
  //}

  monthDays.addEventListener("click", (event) => {
    //console.log(event.currentTarget, event.target.textContent);

    const today = document.querySelector(".today");
    if (today) {
      today.classList.remove("clickedDay");
    }
    const findClickedDay = [...monthDays.childNodes].find((day) => {
      return day.classList.contains("clickedDay");
    });
    if (
      findClickedDay &&
      !event.target.classList.contains("days") &&
      !event.target.classList.contains("prev-date") &&
      !event.target.classList.contains("next-date")
    ) {
      findClickedDay.classList.remove("clickedDay");
    }

    if (
      !event.target.classList.contains("days") &&
      !event.target.classList.contains("prev-date") &&
      !event.target.classList.contains("next-date")
    ) {
      event.target.classList.add("clickedDay");
    }
  });
  // const days = [...document.querySelectorAll(".days div")];
  // function clickDay(day) {
  //   days.addEventListener("click", () => {
  //     day.classList.add("clickedDay");
  //   });
  // }
  // console.log(days);
};
// date.setDate(1);
// console.log(date.getDay());
// const month = date.getMonth();
// console.log(month);

function backToPrevMonth() {
  date.setMonth(date.getMonth() - 1);
  //console.log("month", date.getMonth());
  renderCalendar();
}

function goToNextMonth() {
  date.setMonth(date.getMonth() + 1);
  //console.log("month", date.getMonth());
  renderCalendar();
}

function goToCurrentMonth() {
  console.log("back to current month");

  const today = new Date();
  const day = today.getDate();
  console.log({ today });
  console.log({ day });
  date.setFullYear(today.getFullYear());
  date.setMonth(today.getMonth());
  renderCalendar();
  const monthDays = document.querySelectorAll(".days div");
  const foundToday = [...monthDays].find((monthDay) => {
    return monthDay.textContent === day.toString();
  });
  if (foundToday) {
    foundToday.classList.add("today");
  }
}

const prevMonth = document.querySelector(".prev");
const nextMonth = document.querySelector(".next");

prevMonth.addEventListener("click", backToPrevMonth);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    backToPrevMonth();
  } else if (e.key === "ArrowRight") {
    goToNextMonth();
  }
});

nextMonth.addEventListener("click", goToNextMonth);

renderCalendar();
const currentDate = document.querySelector(".currentDate");

currentDate.addEventListener("click", (event) => {
  //console.log(" p clicked");
  const today = document.querySelector(".today");
  const monthDays = document.querySelector(".days");
  goToCurrentMonth();
  // renderCalendar();

  // const findClickedDay = [...monthDays.childNodes].find((day) => {
  //   return day.classList.contains("clickedDay");
  // });

  // back to date on click p
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // document.querySelector(".date h1").textContent = months[date.getMonth()];

  // document.querySelector(".date h1").textContent = date.getMonth();
  // document.querySelector(".date h2").textContent = date.getFullYear();
  if (findClickedDay) {
    findClickedDay.classList.remove("clickedDay");

    today.classList.add("clickedDay");
  }
});
