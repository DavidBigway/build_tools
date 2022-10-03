import {
  timerCountEl as count,
  start,
  pause,
  set,
  timerCountResultEl as result,
} from './consts.js'

let isPause = false
setInterval(() => {
  if (isPause) {
    result.innerHTML = Number(result.innerHTML) - 1
  }
  if (result.innerHTML <= 0) {
    isPause = false
  }
}, 1000)

const handlerStart = () => {
  if (result.innerHTML <= 0) {
    isPause = false
  } else {
    isPause = true
  }
}
const handlerPause = () => (isPause = false)
export const handlerSet = () => {
  result.innerHTML = count.value
}

export const timer = () => {}
start.addEventListener('click', handlerStart)
pause.addEventListener('click', handlerPause)
