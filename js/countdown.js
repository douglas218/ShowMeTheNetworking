
var endDate = new Date(2020, 4, 21, 18, 30); // stringToDate('2008-09-19 17:35:00');

countdownRefresh();

function countdownRefresh() {
    var beginDate = new Date();

    if (beginDate < endDate) {
        var timeSpan = getTimeSpan(endDate - beginDate);
        
        document.getElementById('days').textContent = timeSpan.day;
        document.getElementById('hours').textContent = timeSpan.hour;
        document.getElementById('minutes').textContent = timeSpan.minute;
        document.getElementById('seconds').textContent = timeSpan.second;

        /* Refresh a cada 1 segundo */
        setTimeout(countdownRefresh, 1000);
    }
    else {
        document.getElementById('countdown').style.display = "none";
        //document.getElementById('countdown-ended').style.display = "block";
    }
}

function getTimeSpan(ticks) {
    var d = new Date(ticks);
    return {
        day: d.getDate() - 1,
        hour: d.getUTCHours(), 
        minute: d.getMinutes(), 
        second: d.getSeconds()
    }
}



