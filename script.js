/*
    Sistem for the User create the Alarms by him self
*/


// Creating the alarm with the display "new-alarm"

const qr = (element)=> document.querySelector(element);
let hourTime = 0;
let minTime = 0;
let saved = false;
let alarmName = "";
let weekList = [];
let setDaysCount = 0;


qr(`.add-edit--add`).addEventListener("click", newAlarm)
qr(`.new-alarm--button-save`).addEventListener("click", saveAlarm)

function newAlarm(){
    hourTime = 0;
    minTime = 0;
    alarmName = "";

    qr(".new-alarm--name").value = "";
    qr(`.new-alarm`).style.display = "flex";

    setDaysCount++;
    setDays()
    setTimer()

}


function setDays(){
    if(setDaysCount == 1){
        document.querySelectorAll(".new-alarm--days--container ul li").forEach(li =>{
            li.addEventListener("click", ()=>{
                if(li.classList.contains("selected") == false){
                    weekList.push(parseInt(li.getAttribute("data-day")))
                    li.classList.add("selected")
                } else{
                    weekList.splice(weekList.indexOf(parseInt(li.getAttribute("data-day"))), 1);
                    li.classList.remove("selected");    
                }
            })
    
        })
    }else{
        return
    }
}

function setTimer(){
    if(saved == false){
    qr(".new-alarm-timer--hour").innerHTML = "0" + hourTime;
    qr(".new-alarm-timer--minute").innerHTML = "0" + minTime;

  
    //UpHour
    qr(".new-alarm-timer--hour--up").addEventListener("click", ()=>{
        if(hourTime < 23){
            hourTime++;
            qr(".new-alarm-timer--hour").innerHTML = hourTime;
            if(hourTime < 10){
                qr(".new-alarm-timer--hour").innerHTML = "0" + hourTime
            }
        }else{
            hourTime = 0;
            qr(".new-alarm-timer--hour").innerHTML = hourTime;
            if(hourTime < 10){
                qr(".new-alarm-timer--hour").innerHTML = "0" + hourTime
            }
        }
        
    })

    //DownHour
    qr(".new-alarm-timer--hour--down").addEventListener("click", ()=>{
        if(hourTime <= 0){
            hourTime = 23;
            qr(".new-alarm-timer--hour").innerHTML = hourTime;
            if(hourTime < 10){
                qr(".new-alarm-timer--hour").innerHTML = "0" + hourTime
            }
        }else{
            hourTime--;
            qr(".new-alarm-timer--hour").innerHTML = hourTime;
            if(hourTime < 10){
                qr(".new-alarm-timer--hour").innerHTML = "0" + hourTime
            }
        }

    })

      //UpMin
      qr(".new-alarm-timer--minute--up").addEventListener("click", ()=>{
        if(minTime < 59){
            minTime++;
            qr(".new-alarm-timer--minute").innerHTML = minTime;
            if(minTime < 10){
                qr(".new-alarm-timer--minute").innerHTML = "0" + minTime;
            }
        }else{
            minTime = 0;
            qr(".new-alarm-timer--minute").innerHTML = minTime;
            if(minTime < 10){
                qr(".new-alarm-timer--minute").innerHTML = "0" + minTime;
            }
        }
        
    })

    //DownMin
    qr(".new-alarm-timer--minute--down").addEventListener("click", ()=>{
        if(minTime <= 0){
            minTime = 59;
            qr(".new-alarm-timer--minute").innerHTML = minTime;
            if(minTime < 10){
                qr(".new-alarm-timer--minute").innerHTML = "0" + minTime;
            }
        }else{
            minTime--;
            qr(".new-alarm-timer--minute").innerHTML = minTime;
            if(minTime < 10){
                qr(".new-alarm-timer--minute").innerHTML = "0" + minTime;
            }
        }

    })
    } else{
        hourTime = 0;
        minTime = 0;
        qr(".new-alarm-timer--hour").innerHTML = hourTime;
        qr(".new-alarm-timer--minute").innerHTML = minTime;    
        return
    }
    
}



function saveAlarm(){
    if(hourTime < 10){
        hourTime = "0" + hourTime
    }
    if(minTime < 10){
        minTime = "0" + minTime
    }
    alarmName = qr(".new-alarm--name").value;
    let alarm = {
        id: modelAlarm.length,
        hour: `${hourTime}:${minTime}`,
        name: alarmName,
        onOf: "on",
        timeLeft: "",
        week: weekList
    }
    modelAlarm.push(alarm)
    qr(".stage-for-alarms").innerHTML = "";
    updateScreen()
    weekList = [];
    document.querySelectorAll(".new-alarm--days--container ul li").forEach(li => li.classList.remove("selected"))

    //    {id: 0, hour: "10:00", name: "Alarme(1)", onOf: "on", timeLeft: "10 horas e 5 min", week: [0, 2]}
    qr(`.new-alarm`).style.display = "none"
    saved = true;
}
