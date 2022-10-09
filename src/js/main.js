import { dateCalcForm, set, switchBtn } from './consts.js'
import { handleCalcDates } from './dateCalc.js'
import { switcher } from './switch.js'
import { handlerSet } from './timer.js'

dateCalcForm.addEventListener('submit', handleCalcDates)
switchBtn.addEventListener('click', switcher)
set.addEventListener('click', handlerSet)
