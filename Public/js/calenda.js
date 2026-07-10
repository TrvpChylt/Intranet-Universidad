const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let currentDateInstance = new Date();
let currYear = currentDateInstance.getFullYear();
let currMonth = currentDateInstance.getMonth();

// storing full name of all months in array
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const renderCalendar = () => {
    // Getting the first day of the month, adjusted to Monday = 0
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    firstDayofMonth = (firstDayofMonth === 0) ? 6 : firstDayofMonth - 1; // Adjust Sunday (0) to Saturday (6), and shift the rest accordingly

    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // Last date of the month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // Last day of the week of that month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Last date of the previous month

    let liTag = "";

    // Creating li for last days of the previous month
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Creating li for all days of the current month
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = (i === currentDateInstance.getDate() && currMonth === currentDateInstance.getMonth()
            && currYear === currentDateInstance.getFullYear()) ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    // Creating li for the first days of the next month
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            currentDateInstance = new Date(currYear, currMonth, new Date().getDate());
            currYear = currentDateInstance.getFullYear();
            currMonth = currentDateInstance.getMonth();
        } else {
            currentDateInstance = new Date();
        }
        renderCalendar();
    });
});
