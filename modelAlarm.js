

// How is gonna be the object for each new Alarm
let modelAlarm = [
    //{id: 0, hour: "10:00", name: "Alarme(1)", onOf: "on", timeLeft: "10 horas e 5 min", week: [0, 2]}
]


// The code that will show the Alarm on the sreen
function updateScreen(){
    modelAlarm.map((item, index) =>{

        let alarmItem = qr(".models .alarm-object").cloneNode(true);
        alarmItem.querySelector(".alarm-object--hour").innerHTML = item.hour;
        alarmItem.querySelector(".alarm-object--name").innerHTML = item.name;
        alarmItem.querySelector(".alarm-object--on-off").classList.remove("on", "off")
        alarmItem.querySelector(".alarm-object--on-off").classList.add(item.onOf);
        timeLeft()

        function timeLeft(){
            let hourMin = item.hour.split(":");
            let hour = hourMin[0]
            let min = hourMin[1];
            let interval = () =>{
                let actualDate = new Date();
                let newDate = new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate(), hour, min);
    
                if(newDate < actualDate){
                    newDate.setDate(newDate.getDate() + 1)
                }
    
                let toMinAtu = (actualDate.getHours() * 60) + actualDate.getMinutes()
                let toMinDef = (newDate.getHours()* 60) + newDate.getMinutes()
    
                let diff = toMinDef - toMinAtu;
    
                let diffHour = Math.floor(diff / 60)
                let diffMin = diff % 60;
    
                //Este "If" vai verificar se a diferença de horas
                //é menor do que zero (ou seja negativa), caso
                // sim, no caso dos minutos: 
                //ele vai retirar 1 dia em minutos
                //(1440min = 24H) e somar com uma hora (60min),
                //no caso das horas:
                //ele vai somar 24 horas (Ou seja 1 dia)
                //FUNÇÃO PARA CORRIGIR CASO A DIFERENÇA DA HORA 
                //DIFINIDA E DA HORA ATUAL DÊ UM VALOR NEGATIVO
                if(diff < 0 ){
                    diffMin = ((diff - 1440) % 60) + 60 ;
                    diffHour = Math.floor((diff / 60) + 24) 
                }
    
                let result = `${diffHour} horas e ${diffMin} minutos`
                item.timeLeft = result
                alarmItem.querySelector(".alarm-object--time-left").innerHTML = item.timeLeft;
            
            }
            setInterval(function(){interval()}, 10000)
            interval()
        }
     


        alarmItem.querySelectorAll(".alarm-object--week-container li").forEach(li => {
        
            li.classList.remove(`selected`)
            if(item.week.indexOf(parseInt(li.getAttribute(`data-day`))) > -1){
                li.classList.add(`selected`);
            }
        })
        qr(".stage-for-alarms").append(alarmItem);

    });
    
}
