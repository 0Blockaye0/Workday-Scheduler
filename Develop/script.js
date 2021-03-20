// DISPLAY CURRENT DATE TO HEADER
var currentDateEl = document.getElementById("currentDay");
var currentDate = moment().format("dddd, MMMM Do YYYY");
console.log(currentDate);
currentDateEl.innerHTML = currentDate;

//DATA
var schedule = [];

var load = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));
    console.log(schedule);
    //loop over object array and fill time-blocks with events
};

var saveSchedule = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  };

// SAVE EVENT/ SAVE BUTTON
$(".saveBtn").on("click", function() {
    
    for (var i = 0; i < 5; i++){
        var eventText = $("#" + i ).val();
        var eventHour = $("#b" + i).html();
        console.log(eventText);
        console.log(eventHour);

        var event = {
            index: i,
            hour: eventHour,
            text: eventText
        };
        console.log(event);

        schedule.push(event);
        console.log(schedule);

        // schedule.forEach
    }
    saveSchedule();
});

// LOAD EVENTS
//load();