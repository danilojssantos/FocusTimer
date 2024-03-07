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


function countdow() {
    setTimeout(function() {

        let seconds = Number(secondsDisplay.textContent)

        if(seconds <=0){
            seconds = 60
        }
        secondsDisplay.textContent = seconds -1

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

    minutesDisplay.textContent = minutes
   // console.log(minutesDisplay.textContent = 3)
})