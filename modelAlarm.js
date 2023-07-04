

// How is gonna be the object for each new Alarm
let modelAlarm = [
    {id: 0, hour: "10:00", name: "Alarme(1)", onOf: "on", timeLeft: "10 horas e 5 min", week: [0, 2]}
]

// The code that will show the Alarm on the sreen
function updateScreen(){
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
    
}

let timeLeft = (element)=>{
    var result = "";

    var date = new Date()
    //Current Hour
  let interval = ()=>{
        
        date = new Date()

//Date created by the alarm
let setDate = new Date();

setDate.setHours(this.hour, this.min);
if(setDate < date){
 setDate.setDate(setDate.getDate() + 1);
};

//Variável que recebe os valor total de tempo
//em minutos da hora atual
let toMinAtu = (date.getHours() * 60) + date.getMinutes();

//Variável que recebe os valor total de tempo
//em minutos da hora definida
let toMinDef = (setDate.getHours() * 60) + setDate.getMinutes();

//Variável que tem a diferença total de tempo em
//minutos entre a hora definida e a hora atual
let diff = toMinDef -  toMinAtu;

//Conversão do tempo to total em minutos para
//Horas
let diffHour = Math.floor(diff / 60);

//Conversão do tempo total para minutos
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

//Este "if" vai colocar um "s" ou retirar consuante
//o valor da hora seja igual ou superior a 1
if(diffHour == 1){
 this.timeLeft = `${diffHour} hora e ${diffMin} min`;
}else{
 this.timeLeft = `${diffHour} horas e ${diffMin} min`;
}

//Se faltar menos de 1 hora o que a var timeLeft
//retorna é somente os minutos
if(diffHour == 0){
 this.timeLeft = `${diffMin} min`
}


this.result = this.timeLeft
this.alarm.querySelector(".time-left").innerHTML= `&#128276;  em ${this.timeLeft}`

}
setInterval(function(){
    interval()
}, 10000)    

interval()
}
