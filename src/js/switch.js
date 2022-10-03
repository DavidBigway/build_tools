import { datecalc, timerEl } from './consts.js'

export function switcher() {
  datecalc.classList.toggle('hide')
  timerEl.classList.toggle('hide')
}
