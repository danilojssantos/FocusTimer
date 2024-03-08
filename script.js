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
function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}

function updateDisplayTimer(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
    updateDisplayTimer(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countdow() {
   timerTimeOut = setTimeout(function() {

        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        //secondsDisplay.textContent = "00"
        updateDisplayTimer(minutes, 0)

        if (minutes <= 0) {

            resetControls()
            return
        }

        if(seconds <=0){
            seconds = 2
            --minutes       
        }

         //secondsDisplay.textContent = String(seconds -1).padStart(2 ,"0")
         updateDisplayTimer(minutes, String(seconds -1))

        countdow()
    }, 1000)
}



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