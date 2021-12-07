let upgradeTime = 7200;
let seconds = upgradeTime;
function timer() {
  let days        = Math.floor(seconds/24/60/60);
  let hoursLeft   = Math.floor((seconds) - (days*86400));
  let hours       = Math.floor(hoursLeft/3600);
  let minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  let minutes     = Math.floor(minutesLeft/60);
  let remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }
  document.getElementById('countdown').innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
    seconds--;
  }
}
let countdownTimer = setInterval('timer()', 1000);