import { dateCalcForm, switchBtn } from './consts.js'
import { handleCalcDates } from './dateCalc.js'
import { switcher } from './switch.js'

dateCalcForm.addEventListener('submit', handleCalcDates)
switchBtn.addEventListener('click', switcher)
