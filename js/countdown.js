
var endDate = new Date(2020, 05, 21, 18, 30); // stringToDate('2008-09-19 17:35:00');

countdownRefresh();

function countdownRefresh() {
    var beginDate = new Date();
    var timeSpan = getTimeSpan(endDate - beginDate);
    
    document.getElementById('days').textContent = timeSpan.day;
    document.getElementById('hours').textContent = timeSpan.hour;
    document.getElementById('minutes').textContent = timeSpan.minute;
    document.getElementById('seconds').textContent = timeSpan.second;

    /* Refresh a cada 1 segundo */
    setTimeout(countdownRefresh, 1000);
}

function getTimeSpan(ticks) {
    var d = new Date(ticks);
    return {
        day: d.getDay(),
        hour: d.getUTCHours(), 
        minute: d.getMinutes(), 
        second: d.getSeconds()
    }
}



