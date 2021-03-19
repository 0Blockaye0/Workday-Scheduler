// DISPLAY CURRENT DATE TO HEADER //
var currentDateEl = document.getElementById("currentDay");
var currentDate = moment().format("dddd, MMMM Do YYYY");
console.log(currentDate);
currentDateEl.innerHTML = currentDate;


