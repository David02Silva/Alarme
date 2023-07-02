/*
    Sistem for the User create the Alarms by him self
*/


// Creating the alarm with the display "new-alarm"


let hourTime = 0;
let minTime = 0;
let saved = false;
let alarmName = "";
let weekList = [];


qr(`.add-edit--add`).addEventListener("click", newAlarm)
qr(`.new-alarm--button-save`).addEventListener("click", saveAlarm)

function newAlarm(){
    hourTime = 0;
    minTime = 0;
    alarmName = "";
    weekList = [];

    qr(".new-alarm--name").value = "";
    qr(`.new-alarm`).style.display = "flex";


    setTimer()
    setDays()
}


function setDays(){
    document.querySelectorAll(".new-alarm--days--container ul li").forEach(li =>{
        li.addEventListener("click", ()=>{
            if(li.classList.contains("selected")){
                li.classList.remove("selected");
                weekList.splice(weekList.indexOf(parseInt(li.getAttribute("data-day"))), 1)
    
            }else{
                li.classList.add("selected")
                weekList.push(parseInt(li.getAttribute("data-day")))
            }
            
        })
    })
}

function setTimer(){
    if(saved == false){
    qr(".new-alarm-timer--hour").innerHTML = hourTime;
    qr(".new-alarm-timer--minute").innerHTML = minTime;

    //UpHour
    qr(".new-alarm-timer--hour--up").addEventListener("click", ()=>{
        if(hourTime < 23){
            hourTime++;
            qr(".new-alarm-timer--hour").innerHTML = hourTime;
        }else{
            hourTime = 0;
            qr(".new-alarm-timer--hour").innerHTML = hourTime;
            
        }
        
    })

    //DownHour
    qr(".new-alarm-timer--hour--down").addEventListener("click", ()=>{
        if(hourTime <= 0){
            hourTime = 23;
            qr(".new-alarm-timer--hour").innerHTML = hourTime;
        }else{
            hourTime--;
            qr(".new-alarm-timer--hour").innerHTML = hourTime;
        }

    })

      //UpMin
      qr(".new-alarm-timer--minute--up").addEventListener("click", ()=>{
        if(minTime < 59){
            minTime++;
            qr(".new-alarm-timer--minute").innerHTML = minTime;
        }else{
            minTime = 0;
            qr(".new-alarm-timer--minute").innerHTML = minTime;
            
        }
        
    })

    //DownMin
    qr(".new-alarm-timer--minute--down").addEventListener("click", ()=>{
        if(minTime <= 0){
            minTime = 59;
            qr(".new-alarm-timer--minute").innerHTML = minTime;
        }else{
            minTime--;
            qr(".new-alarm-timer--minute").innerHTML = minTime;
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
    console.log(`${hourTime} horas e ${minTime} minutos`)
    alarmName = qr(".new-alarm--name").value;
    console.log(`Nome do Alarme: ${alarmName}`)
    console.log(`Week Selected: ${weekList}`)

    qr(`.new-alarm`).style.display = "none"
    saved = true;
}
