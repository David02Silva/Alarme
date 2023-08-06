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
qr(`.add-edit--edit`).addEventListener("click", editAlarm)

function editAlarm(){
    if(modelAlarm.length > 0){
        var alarms = document.querySelectorAll(".stage-for-alarms .alarm-object")
        let buttEdit = document.querySelector(".add-edit--edit");


        if(this.style.display !=  "none"){
            this.style.display = "none";
            qr(".add-edit--check").style.display = "block"

            alarms.forEach(alarm => {
                let onOffButt = alarm.querySelector(".alarm-object--on-off");
                onOffButt.style.display = "none"

                var trash = alarm.querySelector(".alarm--deleteBt")
                trash.style.display = "block"

                trash.addEventListener("click", ()=>{
                    modelAlarm.splice(parseInt(alarm.getAttribute("data-id")), 1)
                    alarm.remove()
                    console.log(modelAlarm)
                })
            })
        }
        qr(".add-edit--check").addEventListener("click", ()=>{
            qr(".add-edit--check").style.display = "none"
            qr(".add-edit--edit").style.display = "block"
            

            alarms.forEach(alarm => {
                let onOffButt = alarm.querySelector(".alarm-object--on-off");
                
                alarm.querySelector(".alarm--deleteBt").style.display = "none"
                onOffButt.style.display = "block";
                

            })
        })
    }
}
        

function newAlarm(){
    hourTime = 0;
    minTime = 0;
    alarmName = "";
    qr(".new-alarm--name").value = "";
    qr(`.new-alarm`).style.display = "flex";
    qr(`.new-alarm--button-cancel`).addEventListener("click", ()=>{qr(`.new-alarm`).style.display = "none";})
    

    setDaysCount++;
    setDays()
    setTimer()

}


function setDays(){
    if(setDaysCount == 1){
        var weeks = document.querySelectorAll(".new-alarm--days--container ul li")
        var weekArray = Object.values(weeks)


        weeks.forEach(li =>{
            li.addEventListener("click", ()=>{
                if(li.classList.contains("selected") == false){
                    weekList.push(parseInt(li.getAttribute("data-day")))
                    li.classList.add("selected")

                    if(weekArray.some((item)=> item.classList.contains("selected"))){
                        qr(".new-alarm--repeat").checked = true;  
                    }

                } else{
                    weekList.splice(weekList.indexOf(parseInt(li.getAttribute("data-day"))), 1);
                    li.classList.remove("selected");
                    qr(".new-alarm--checkbox-container .new-alarm--repeat")
                    
                    if(weekArray.some((item)=> item.classList.contains("selected")) == false){
                        qr(".new-alarm--repeat").checked = false;   
                    }
                }
            })
    
        })
    }else{
        return
    }
}

function setTimer(){
    let number = "";
    if(saved == false){
    qr(".new-alarm-timer--hour").innerHTML = "00";
    qr(".new-alarm-timer--minute").innerHTML = "00";

  qr(".new-alarm-timer--hour").addEventListener("mouseover", ()=>{
    this.addEventListener("keyup", (key)=>{
        if(key.keyCode <= 57 && key.keyCode >= 48 ){
            
            if(number.length < 2 && number <= 23){
                number += key.key
                if(number <= 23){
                    qr(".new-alarm-timer--hour").innerHTML = number;
                    hourTime = number;
                }else{
                    qr(".new-alarm-timer--hour").innerHTML = "00";
                   hourTime = 0;
                }
                console.log(number)
                
            }else{
                number = "";
                number += key.key
                console.log(number)
            }
        }
    })
  })



  qr(".new-alarm-timer--minute").addEventListener("mouseover", ()=>{
    this.addEventListener("keyup", (key)=>{
        if(key.keyCode <= 57 && key.keyCode >= 48 ){
            
            if(number.length < 2 && number <= 59){
                number += key.key
                if(number <= 23){
                    qr(".new-alarm-timer--minute").innerHTML = number;
                    hourTime = number;
                }else{
                    qr(".new-alarm-timer--minute").innerHTML = "00";
                   hourTime = 0;
                }
                console.log(number)
                
            }else{
                number = "";
                number += key.key
                console.log(number)
            }
        }
    })
  })
    //UpHour
    qr(".new-alarm-timer--hour--up").addEventListener("click", ()=>{
        this.selected = true
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
        if(hourTime < 10){
            qr(".new-alarm-timer--hour").innerHTML = "0" + hourTime;
        }
        if(minTime < 10){
            qr(".new-alarm-timer--minute").innerHTML = "0" + minTime;    
        }
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
    qr(".new-alarm--repeat").checked = false; 


    //    {id: 0, hour: "10:00", name: "Alarme(1)", onOf: "on", timeLeft: "10 horas e 5 min", week: [0, 2]}
    qr(`.new-alarm`).style.display = "none"
    saved = true;
}
