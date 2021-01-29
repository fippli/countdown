(function () {

  'use strict';

  const timerElement = document.getElementById('timer');
  const [query, time] = window.location.search.split("=");
  const deadline = new Date(time);
  
  setInterval(function() {
    const difference = deadline - new Date().getTime();
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);
    timerElement.innerHTML = d + "d " + h + "h "
    + m + "m " + s + "s ";
    if (difference < 0) {
      clearInterval(t);
        timerElement.innerHTML = "EXPIRED";
    }
  }, 1000);
  
})();
