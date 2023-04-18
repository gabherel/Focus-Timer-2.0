import {
  minutesDisplay,
  secondsDisplay
} from './elements.js'
import Events from './events.js'
import Sound from './sounds.js'
import Controls from './controls.js'
import Timer from './timer.js'

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const controls = Controls()
const sound = Sound()

Events({ sound, controls, timer })
