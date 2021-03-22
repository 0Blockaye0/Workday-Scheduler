// DISPLAY CURRENT DATE TO HEADER
var currentDateEl = document.getElementById("currentDay");
var currentDate = moment().format("dddd, MMMM Do YYYY");
console.log(currentDate);
currentDateEl.innerHTML = currentDate;

// CURRENT TIME
var currentTime = moment().hour();
console.log(currentTime);

// DATA
var schedule = [];

// LOAD EVENTS ON PAGE-LOAD
var load = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));

        if(!schedule){
            console.log("nothing in storage");
            window.alert("Your schedule is wiiiiiiide open");
            schedule = [];
        } 
        else {
            schedule = JSON.parse(localStorage.getItem("schedule"));
            console.log(schedule);
            //loop over objects in array and fill time-blocks with events
            schedule.forEach(event => {
                console.log(event);
                console.log(event.index);
                console.log($("#" + event.index));
                var timeBlock = $("#" + event.index);

                timeBlock.val(event.text);
            });
        };
};

// SAVE EVENTS
var saveSchedule = function() {
    localStorage.clear();
    localStorage.setItem("schedule", JSON.stringify(schedule));
  };

// SAVE EVENTS/ SAVE BUTTON
$(".saveBtn").on("click", function() {

    schedule = [];
    
    for (var i = 9; i < 17; i++){
        var eventText = $("#" + i ).val();
        console.log(eventText);
      
        var event = {
            
            index: i,
           
            text: eventText
        };
        console.log(event);
        
        schedule.push(event);
        console.log(schedule);
    }
    saveSchedule();
});

// ADDS COLOR WARNINGS TO EVENTBLOCKS
var timeWarning = function() {
    
    for (var i = 9; i < 17; i++){
        var timeblock = $("#" + i );
        if (currentTime > i ) {
            console.log(timeblock);
            timeblock.addClass("alert alert-secondary");
        } else if (currentTime === i ){
            timeblock.addClass("alert alert-danger");
        } else {
            timeblock.addClass("alert alert-success");
        };
        
        



        // var eventBlock = document.getElementById(i);
        // console.log(eventBlock);

        // if (currentTime === timeText){
        //     eventBlock.classList.add("alert", "alert-success");
        // } else 
        // if (currentTime.isafter(timeText)) {
        //     console.log("it worked");
        //     eventBlock.classList.add("alert", "alert-danger");
        // }
    };
};    

// LOAD THE CALENDER
load();

timeWarning();

setInterval(function(){ timeWarning, 60000});