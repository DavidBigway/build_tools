import { timerEl } from './consts.js'

let isPause = false
setInterval(() => {
  if (isPause) {
    timerEl.innerHTML = Number(timerEl.innerHTML) + 1
  }
}, 1000)
export const timer = () => {
  isPause = !isPause
}
