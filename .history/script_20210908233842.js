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

  monthDays.replaceChildren();

  console.log({ prevLastDay });
  console.log({ firstDayIndex });
  if (firstDayIndex !== 0) {
    for (let x = firstDayIndex - 1; x > 0; x--) {
      const div = document.createElement("div");
      div.textContent = prevLastDay - x + 1;
      div.className = "prev-date";
      monthDays.appendChild(div);
    }
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
    } else {
      let div = document.createElement("div");
      div.textContent = i;
      monthDays.appendChild(div);
    }
  }

  for (let j = 1; j <= 7 - d.getDay(); j++) {
    console.log(d.getDay(), j);
    if (firstDayIndex !== 5) {
      let div = document.createElement("div");
      div.textContent = j;
      div.className = "next-date";
      monthDays.appendChild(div);
    }
  }

  monthDays.addEventListener("click", (event) => {
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
};

function backToPrevMonth() {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

function goToNextMonth() {
  date.setMonth(date.getMonth() + 1);
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
  const today = document.querySelector(".today");
  const monthDays = document.querySelector(".days");
  goToCurrentMonth();
});
