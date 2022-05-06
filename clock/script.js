// code reference: Skillcrush

//variables
var wakeuptime = 7;
var noon = 12;
var worktime = 12;
var sleeptime = wakeuptime + 6;
var CT;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the page
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
      if (hours >= noon)
      {
          meridian = "PM";
      }

      if (hours > noon)
      {
          hours = hours - 12;
      }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
 

  var timeEventJS = document.getElementById("timeEvent");
 
  
  if (time == CT)
  {
  
    messageText = "YOU ARE YOUR ONLY TIME!";
  }
  else if (time == wakeuptime)
  {

    messageText = "Stay productive! But if you are struggling, SPEAK UP!";
  }
  else if (time == worktime)
  {
    messageText = "Maybe technology is on its way to change the 9 to 5 work schedule!";
  }
  else if (time == sleeptime)
  {
    messageText = "Listen to your internal clock";
  }
  else if (time < noon)
  {
    messageText = "YOU ARE YOUR ONLY TIME!";
  }
  else if (time >= evening)
  {
    messageText = "It does not matter what others are doing!";
  }
  else
  {
    messageText = "YOU ARE YOUR ONLY TIME!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Button To Work
var CTButton = document.getElementById("CTButton");

var CTEvent = function()
{
    if (CT < 0) 
    {
        CT = new Date().getHours();
        CTButton.innerText = "PEOPLE ARE DIFFERENT";
       CTButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        CT = -1;
        CTButton.innerText = "BE YOURSELF!";
        CTButton.style.backgroundColor = "#222";
    }
};

CTButton.addEventListener("click", CTEvent);
CTEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates work selector
var workTimeSelector =  document.getElementById("workTimeSelector");

var workEvent = function()
{
    worktime = workTimeSelector.value;
};

workTimeSelector.addEventListener("change", workEvent);


// Activates sleep-Time selector
var sleepTimeSelector =  document.getElementById("sleepTimeSelector");

var sleepEvent = function()
{
    sleeptime = sleepTimeSelector.value;
};

sleepTimeSelector.addEventListener("change", sleepEvent);

var audio = new Audio("Clock-sound-tick-tock/audio_file.mp3");
audio.play();