import { datecalc, timerEl } from './consts.js'
import { timer } from './timer.js'

export function switcher() {
  datecalc.classList.toggle('hide')
  timerEl.classList.toggle('hide')
  timer()
}
