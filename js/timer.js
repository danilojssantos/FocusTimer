export default function Timer({
    minutesDisplay,
    secondsDisplay,
  
    resetControls,
    minutes

}){

    let timerTimeOut

    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function updateMinutes(newMinutes){

        minutes = newMinutes
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }

    function countdow() {
    timerTimeOut = setTimeout(function() {

            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            //secondsDisplay.textContent = "00"
            updateDisplay(minutes, 0)

            if (minutes <= 0) {

                resetControls()
                return
            }

            if(seconds <=0){
                seconds = 60
                --minutes       
            }

            //secondsDisplay.textContent = String(seconds -1).padStart(2 ,"0")
            updateDisplay(minutes, String(seconds -1))

            countdow()
        }, 1000)
    }

    return{
        countdow,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
}