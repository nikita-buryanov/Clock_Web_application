function setClock(){
  var time = document.getElementById("Time");
  var date = document.getElementById("Date");
  var curTime = new Date();
  let hours = curTime.getHours();
  let minutes = curTime.getMinutes();
  let seconds = curTime.getSeconds();
  let day = curTime.getDate();
  let month = curTime.getMonth();
  let year = curTime.getFullYear();
  time.innerHTML = new String((hours<10?"0"+ hours:hours) + ":" + (minutes<10?"0"+ minutes:minutes) + ":" + (seconds<10?"0"+ seconds:seconds) + (hours<12?"AM":"PM"));
  date.innerHTML = new String(day + "/" + (month+1) + "/" + year);
}
setTimeout(setClock,20);
setInterval(setClock, 1000);