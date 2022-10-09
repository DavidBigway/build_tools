import {
  timerCountEl as count,
  start,
  pause,
  timerCountResultEl as result,
  clockAudio,
} from './consts.js'

let isPause = false
setInterval(() => {
  if (isPause) {
    result.innerHTML = Number(result.innerHTML) - 1
  }
  if (result.innerHTML <= 0) {
    isPause = false
    clockAudio.pause()
  }
}, 1000)

const handlerStart = () => {
  if (result.innerHTML <= 0) {
    isPause = false
    clockAudio.pause()
  } else {
    isPause = true
    clockAudio.play()
  }
}
const handlerPause = () => {
  isPause = false
  clockAudio.pause()
}
export const handlerSet = () => {
  result.innerHTML = count.value
}
start.addEventListener('click', handlerStart)
pause.addEventListener('click', handlerPause)
