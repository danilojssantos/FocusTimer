import resetControls from "./controls.js"
import "./timer.js"


const buttonPlay = document.querySelector('.play')
const buttonPause =  document.querySelector('.pause')
const buttonSet = document.querySelector('.set')
const buttonStop = document.querySelector('.stop')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut 

// Eventos event drive

buttonPlay.addEventListener('click', function () {
    
    buttonPlay.classList.add('hide')

    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
    countdow()

   
})


buttonPause.addEventListener('click', function (){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut)
    
})

buttonStop.addEventListener('click', function(){
   resetControls()
   resetTimer()
   
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function(){
   let newMinutes = prompt('Quantos Minutos') 

    if (!newMinutes) {
        resetTimer()
        retunr
    }

    minutes = newMinutes
    updateDisplayTimer(minutes, 0)
   
})