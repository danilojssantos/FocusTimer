export default function controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
}){

    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause(){
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')

    }
    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    function getMinutes(){
        let newMinutes = prompt('Quantos Minutos') 

        if (!newMinutes) {
            return 
        }
    
       return newMinutes
        
    }
    return {
    reset,
    play,
    pause, 
    getMinutes
    }
}



