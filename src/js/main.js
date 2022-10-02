import { dateCalcForm, dateCalcResult } from './consts.js'
import { diffDates, diffToHtml } from './datecalc.js'
import { formatError } from './utils.js'

dateCalcForm.addEventListener('submit', handleCalcDates)

function handleCalcDates(event) {
  let { firstDate, secondDate } = event.target.elements
  dateCalcResult.innerHTML = ''
  event.preventDefault()

  firstDate = firstDate.value
  secondDate = secondDate.value

  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate)
    dateCalcResult.innerHTML = diffToHtml(diff)
  } else
    dateCalcResult.innerHTML = formatError(
      'Для расчета промежутка необходимо заполнить оба поля'
    )
}
