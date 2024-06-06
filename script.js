document.getElementById('myButton').addEventListener('click', function() {
    // Navigate to another HTML file
    window.location.href="/alaram.html";
});
function setAlarm() {
    
    // Get the input element for alarm time
    var alarmInput = document.getElementById('alarmTime').value;

    if (!alarmInput) {
        alert("Please enter a valid time for the alarm.");
        return;
    }

    // Split the alarm time into hours and minutes
    var [alarmHour, alarmMinute] = alarmInput.split(':').map(Number);

    // Get the current time
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();

    // Calculate the difference between current time and alarm time
    var timeDiff = (alarmHour - currentHour) * 60 + (alarmMinute - currentMinute);

    // Convert timeDiff to milliseconds
    var timeInMillis = timeDiff * 60 * 1000;

    if (timeInMillis <= 0) {
        alert("Please set the alarm for a time in the future.");
        return;
    }

    // Set a timeout to trigger the alarm
    setTimeout(function() {
        alert("Wake up!");
    }, timeInMillis);
}
