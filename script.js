// Setting up clock functions

// set up a constant / variable for each clock hand

var secondHand = document.querySelector("#second-hand");
var minsHand = document.querySelector("#minute-hand");
var hourHand = document.querySelector("#hour-hand");

function setDate () {
  var now = new Date();

  var seconds = now.getSeconds();
  var secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  var mins = now.getMinutes();
  var minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  // set up the hour hand so it moves each minute, to enable it to move between the full hour marks
  var hour = now.getHours();
  var currHour = hour + (mins / 60);
  var hourDegrees = ((currHour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  console.log("seconds =" + seconds);
  console.log("degrees =" + secondsDegrees);

}

setInterval(setDate, 1000);

setDate();

// setting up styling functions

var inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

// when 'hear' changed value of each input type >> run the handleUpdate function
inputs.forEach(input => input.addEventListener("change", handleUpdate));
