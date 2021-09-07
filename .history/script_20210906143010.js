const date = new Date();
const renderCalendar = () => {
  const monthDays = document.querySelector(".days");
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

  if (firstDayIndex - 1 !== "6") {
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
      days += `<div>${i}</div>`;
    }

    monthDays.innerHTML = days;
  }
  console.log("next days", nextDays, "last day index", lastDayIndex);
  //for (let j = 1; j <= nextDays - 1; j++) {
  for (let j = 1; j <= -nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};
// date.setDate(1);
// console.log(date.getDay());
// const month = date.getMonth();
// console.log(month);

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  console.log("month", date.getMonth());
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  console.log("month", date.getMonth());
  renderCalendar();
});

renderCalendar();
