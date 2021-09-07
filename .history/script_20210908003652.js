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
    date.getMonth(),
    0
  ).getDay();
  console.log({ firstDayIndex });
  console.log({ lastDayIndex });
  console.log({ lastDay });

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

  //if (lastDayIndex !== 0) {
  for (let x = firstDayIndex; x > 0; x--) {
    const div = document.createElement("div");
    div.textContent = prevLastDay - x + 1;
    div.className = "prev-date";
    monthDays.appendChild(div);
    //days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  //  console.log(firstDayIndex - 1, "nie poniedziałek");
  //}

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
    let div = document.createElement("div");
    div.textContent = j;
    div.className = "next-date";
    monthDays.appendChild(div);
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

const currentDate = document.querySelector(".currentDate");

currentDate.addEventListener("click", (event) => {
  //console.log(" p clicked");
  const today = document.querySelector(".today");
  const monthDays = document.querySelector(".days");

  const findClickedDay = [...monthDays.childNodes].find((day) => {
    return day.classList.contains("clickedDay");
  });
  if (findClickedDay) {
    findClickedDay.classList.remove("clickedDay");
    today.classList.add("clickedDay");
  }
});

renderCalendar();
