var times = document.getElementById('time');
var days = document.getElementById('day');
var month = document.getElementById('month');
var dates = document.getElementById('date');
var year = document.getElementById('year');

var months_12=["January","February","March","April","May","June","July","August","September","October","November","December"];
var weeks=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function timer() {
  var today = new Date();
  var s = today.getSeconds();
  var m = today.getMinutes();
  var h = today.getHours();
  var mon = today.getMonth();
  var dnum = today.getDate();
  var yr = today.getFullYear();
  var day = today.getDay();
  days.textContent = weeks[day];
  month.textContent = months_12[mon];
  dates.textContent = ("0" + dnum).substr(-2);
  year.textContent = ("0" + yr).substr(-4);
  times.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

let data=0;
document.getElementById("counter").innerText=data; 
function incrementValue(){
  data++;
  document.getElementById("counter").innerText=data;
  if(data%2===0){
    document.getElementById("mainn").style.color = "green";
  }
  else{
    document.getElementById("mainn").style.color = "red";
  }
}

setInterval(timer, 1000);