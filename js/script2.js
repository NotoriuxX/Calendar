const calendar = document.getElementById("calendar");
const header = document.getElementById("calendar-header");
const prevMonth = document.getElementById("prev-month");
const monthYear = document.getElementById("month-year");
const nextMonth = document.getElementById("next-month");
const calendarBody = document.getElementById("calendar-body");
const calendarDates = document.getElementById("calendar-dates");
const calendarTimes = document.getElementById("calendar-times");
const selectedDate = document.getElementById("selected-date");
const availableTimes = document.getElementById("available-times");
const bookAppointment = document.getElementById("book-appointment");

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

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
  "December"
];

const renderCalendar = (month, year) => {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  // Create header
  let row = document.createElement("tr");
  for (let i = 0; i < 7; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = "SMTWTFS"[i];
    row.appendChild(cell);
  }
  tblBody.appendChild(row);

  // Create calendar dates
  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        cell.innerHTML = "";
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement("td");
        cell.innerHTML = date;
        cell.addEventListener("click", () => {
          let cells = document.querySelectorAll("td");
          for (let k = 0; k < cells.length; k++) {
            cells[k].classList.remove("selected-date");
          }
          cell.classList.add("selected-date");
          selectedDate.innerHTML = `${months[month]} ${date}, ${year}`;
          renderAvailableTimes();
        });
        row.appendChild(cell);
        date++;
      }
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  calendarDates.innerHTML = "";
  calendarDates.appendChild(tbl);
};
