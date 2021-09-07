const date = new Date();
// const month = date.getMonth();
// console.log(month);
const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
console.log(lastDay);
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

document.querySelector(".date h1").innerHTML = months[date.getMonth()];

document.querySelector(".date p").innerHTML = date.toDateString();

let days = "";
for (let i = 1; i <= 31; i++) {
  days += `<div>${i}</div>`;
  monthDays.innerHTML = days;
}
