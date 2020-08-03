function timer() {
    //middle
    var nowDate = new Date();
    var achiveDate = new Date(2020,7,18,17,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('mid-timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    let elemnt_days = document.getElementById("middle-days");
    elemnt_days.innerHTML=days;
    let elemnt_hours = document.getElementById("middle-hours");
    elemnt_hours.innerHTML=hours;
    let elemnt_minutes = document.getElementById("middle-minutes");
    elemnt_minutes.innerHTML=minutes;
    let elemnt_seconds = document.getElementById("middle-seconds");
    elemnt_seconds.innerHTML=seconds;
    //beginner
    var nowDateM = new Date();
    var achiveDateM = new Date(2020,7,14,17,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var resultM = (achiveDateM - nowDateM)+1000;
    if (resultM < 0) {
        var elmntM = document.getElementById('beg-timer');
        elmntM.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var secondsM = Math.floor((resultM/1000)%60);
    var minutesM = Math.floor((resultM/1000/60)%60);
    var hoursM = Math.floor((resultM/1000/60/60)%24);
    var daysM = Math.floor(resultM/1000/60/60/24);
    if (secondsM < 10) secondsM = '0' + secondsM;
    if (minutesM < 10) minutesM = '0' + minutesM;
    if (hoursM < 10) hoursM = '0' + hoursM;
    let elemnt_daysM = document.getElementById("beginner-days");
    elemnt_daysM.innerHTML=daysM;
    let elemnt_hoursM = document.getElementById("beginner-hours");
    elemnt_hoursM.innerHTML=hoursM;
    let elemnt_minutesM = document.getElementById("beginner-minutes");
    elemnt_minutesM.innerHTML=minutesM;
    let elemnt_secondsM = document.getElementById("beginner-seconds");
    elemnt_secondsM.innerHTML=secondsM;
    //advanced
    var nowDateC = new Date();
    var achiveDateC = new Date(2020,7,8,17,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var resultC = (achiveDateC - nowDateC)+1000;
    if (resultC < 0) {
        var elmntC = document.getElementById('ad-timer');
        elmntM.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var secondsC = Math.floor((resultC/1000)%60);
    var minutesC = Math.floor((resultC/1000/60)%60);
    var hoursC = Math.floor((resultC/1000/60/60)%24);
    var daysC = Math.floor(resultC/1000/60/60/24);
    if (secondsC < 10) secondsC = '0' + secondsC;
    if (minutesC < 10) minutesC= '0' + minutesC;
    if (hoursM < 10) hoursC = '0' + hoursC;
    let elemnt_daysC = document.getElementById("advanced-days");
    elemnt_daysC.innerHTML=daysC;
    let elemnt_hoursC = document.getElementById("advanced-hours");
    elemnt_hoursC.innerHTML=hoursC;
    let elemnt_minutesC = document.getElementById("advanced-minutes");
    elemnt_minutesC.innerHTML=minutesC;
    let elemnt_secondsC = document.getElementById("advanced-seconds");
    elemnt_secondsC.innerHTML=secondsC;
    //general
    setTimeout(timer, 1000);
}
window.onload = function() {
    timer();
}
// В html разметке задаем блок с id="timer", в него будет выводится обратный отсчет.