import { dateCalcResult } from './consts.js'
import { DateTime } from './luxon.js'
import { formatError } from './utils.js'

export function handleCalcDates(event) {
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

function diffDates(firstDate, secondDate) {
  firstDate = DateTime.fromISO(firstDate)
  secondDate = DateTime.fromISO(secondDate)
  if (firstDate > secondDate)
    secondDate = [firstDate, (firstDate = secondDate)][0]
  return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject()
}

const diffToHtml = (diff) => `
    <span>
        ${diff.years ? 'Лет: ' + diff.years : ''}
        ${diff.months ? 'Месяцев: ' + diff.months : ''}
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
    `
