const pad               = document.querySelector('.clickable-pad')
const overlay           = document.querySelector('#overlay')
const clickCountBoard   = document.querySelector('.clicks')
const timer             = document.querySelector('.timer')
const timerS            = document.querySelector('.seconds')
const timerMS           = document.querySelector('.milseconds')
const averagePanel      = document.querySelector('.avrg')

let count               = 0
let average             = 0
let seconds             = 0
let milSeconds          = 0

timerS.innerHTML = seconds
timerMS.innerHTML = milSeconds

const cpm = ()=>{   
    // get number of clicks
    pad.onclick = ()=>{
        count ++
        clickCountBoard.innerHTML = count
    }
}

const end = (x, y)=>{
    if (x === 5) {
        clearInterval(y)
        average = count / 5
        averagePanel.innerHTML = `You made ${count} Clicks in 5 Seconds, with the speed of ${average} CPS`
        timer.style.display = 'none'
        overlay.style.display = 'flex'
        overlay.style.alignItems = 'center'
        overlay.style.justifyContent = 'center'
        count               = 0
        average             = 0
        seconds             = 0
        milSeconds          = 0
    }
}

// starting the game after te first click
overlay.addEventListener('click', ()=>{
    overlay.style.display = 'none'
    pad.style.display = 'block'
    timer.style.display = 'block'
    averagePanel.innerHTML = ''
    // counting clicks
    cpm()

    // getting all the clicks within 5sec
    let int = setInterval(() => {
        milSeconds %=10 
        milSeconds++

        timerS.innerHTML = seconds
        timerMS.innerHTML = milSeconds
        if (milSeconds === 10) {
            milSeconds = 0
            seconds++
        }
        
        end(seconds, int)
    }, 100);
})
