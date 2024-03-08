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
            seconds = 60
            --minutes       
        }

         //secondsDisplay.textContent = String(seconds -1).padStart(2 ,"0")
         updateDisplayTimer(minutes, String(seconds -1))

        countdow()
    }, 1000)
}