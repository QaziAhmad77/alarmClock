console.log("This is working");


var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');


function ringBell(){
    audio.play();
}


const alarmbtn = document.getElementById("alarmbtn");


alarmbtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const alarm = document.getElementById("alarm");
    console.log("its running");
    const alarmValue = alarm.value;
    let alarmTime = new Date(alarmValue);
    console.log(alarmTime);
    let now = new Date();
    console.log(now);
    let exactTime = alarmTime - now;
    console.log(exactTime);
    if(exactTime >= 0){
        setTimeout(() =>{
        ringBell();
        },exactTime);
    }
});

