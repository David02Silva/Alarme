const qr = (element)=> document.querySelector(element);

// How is gonna be the object for each new Alarm
let modelAlarm = [
    {id: 0, hour: "10:00", name: "Alarme(1)", onOf: "on", timeLeft: "10 horas e 5 min", week: [0, 2]},
    {id: 1, hour: "05:00", name: "Teste", onOf: "off", timeLeft: "5 horas e 5 min", week: [4,6]},
    {id: 2, hour: "20:00", name: "Alarme", onOf: "on", timeLeft: "10 horas e 5 min", week: [1,3]},
    {id: 3, hour: "04:00", name: "Alarme(5)", onOf: "on", timeLeft: "10 horas e 5 min", week: [5]}
]

// The code that will show the Alarm on the sreen
modelAlarm.map((item, index) =>{

    let alarmItem = qr(".models .alarm-object").cloneNode(true);
    alarmItem.querySelector(".alarm-object--hour").innerHTML = item.hour;
    alarmItem.querySelector(".alarm-object--name").innerHTML = item.name;

    alarmItem.querySelector(".alarm-object--on-off").classList.remove("on", "off")
    alarmItem.querySelector(".alarm-object--on-off").classList.add(item.onOf);
    alarmItem.querySelector(".alarm-object--time-left").innerHTML = item.timeLeft;

 
    alarmItem.querySelectorAll(".alarm-object--week-container li").forEach(li => {
    
        li.classList.remove(`selected`)
        if(item.week.indexOf(parseInt(li.getAttribute(`data-day`))) > -1){
            li.classList.add(`selected`);
        }
    })
    
    qr(".stage-for-alarms").append(alarmItem);
});


