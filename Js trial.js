
let startBtn = document.getElementById("strat")
let stopBtn = document.getElementById("stop")
let resetBtn = document.getElementById("reset")

let appendSeconds = document.getElementById("seconds")
let appendTens = document.getElementById("tens")
let seconds = 00
let tens = 00 
let interval;


startBtn.addEventListener("click" , () => {

  clearInterval(interval)
  interval = setInterval(startTimer , 10  )

} )

stopBtn.addEventListener("click" , () => {

  clearInterval(interval) 
})

resetBtn.addEventListener("click" , () => {

  clearInterval(interval)
  tens = 00
  seconds = 00
  appendSeconds.innerHTML = "0" +  seconds
  appendTens.innerHTML = "0" + tens
})


function startTimer(){


  tens++

  if(tens < 9 ){
    appendTens.innerHTML = "0" + tens
  }

  if(tens > 9 ) {

    appendTens.innerHTML= tens
  }

  if (tens > 99 ){
    seconds++
    appendSeconds.innerHTML= "0" + seconds
    tens = 0 
    appendTens.innerHTML = "0" + 0 
  }

  if ( seconds < 9 ){
    appendSeconds.innerHTML = "0" + seconds
  }
  if( seconds > 9 ) {

    appendSeconds.innerHTML = seconds
  }
}
