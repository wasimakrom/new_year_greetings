var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');


var endDate = '1/1/2025 00:00:00'; 
// Date format = 'mm/dd/yy'

var x = setInterval(function(){
    var now = new Date(endDate).getTime();
    var countDown = new Date().getTime();
    var distance = now - countDown;


 //Time Calculations for days , hours, minutes, seconds

    var d = Math.floor(distance/(1000*60*60*24));
    var h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var m = Math.floor((distance % (1000*60*60)) / (1000*60));
    var s = Math.floor((distance % (1000*60)) / (1000));


   // Out put the result in element with id 
 
   days.innerHTML = d;
   hours.innerHTML = h;
   minutes.innerHTML = m;
   seconds.innerHTML = s;


    if(distance < 0){
      clearInterval(x);
      document.querySelector(".wrapper").style.display = 'none';

      document.querySelector(".newYear").style.display = 'block';
   }



})
