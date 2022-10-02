import { switchBtn, datecalc, timerEl } from './consts.js'
import { timer } from './timer.js'

switchBtn.addEventListener('click', switcher)

export function switcher() {
  datecalc.classList.toggle('hide')
  timerEl.classList.toggle('hide')
  timer()
}
