const buttonPlay = document.querySelector('.play')
const buttonPause =  document.querySelector('.pause')
const buttonSet = document.querySelector('.set')
const buttonStop = document.querySelector('.stop')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')


// Eventos event drive
function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}

function countdow() {
    setTimeout(function() {

        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        secondsDisplay.textContent = "00"

        if (minutes <= 0) {

            resetControls()
            return
        }

        if(seconds <=0){
            seconds = 2

          minutesDisplay.textContent = String(minutes - 1).padStart(2,"0")
        }

         secondsDisplay.textContent = String(seconds -1).padStart(2 ,"0")

       
       

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
    
})

buttonStop.addEventListener('click', function(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
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
    minutes = prompt('Quantos Minutos')

    minutesDisplay.textContent = String(minutes).padStart(2, "0")
   // console.log(minutesDisplay.textContent = 3)
})