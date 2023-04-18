import {
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonMinum,
  buttonCoffee,
  buttonForest,
  buttonFire,
  buttonRain,
  forestBg,
  forestSymbol,
  rainBg,
  rainSymbol,
  coffeeBg,
  coffeeSymbol,
  fireBg,
  fireSymbol
} from './elements.js'

export default function ({ sound, controls, timer}) {
  buttonForest.addEventListener('click', () => {
    sound.forestPlay()
    controls.soundActive(forestBg, forestSymbol)
    controls.soundOff(coffeeBg, coffeeSymbol)
    controls.soundOff(fireBg, fireSymbol)
    controls.soundOff(rainBg, rainSymbol)
  })

  buttonRain.addEventListener('click', () => {
    sound.rainPlay()
    controls.soundActive(rainBg, rainSymbol)
    controls.soundOff(coffeeBg, coffeeSymbol)
    controls.soundOff(forestBg, forestSymbol)
    controls.soundOff(fireBg, fireSymbol)
  })

  buttonCoffee.addEventListener('click', () => {
    sound.coffeePlay()
    controls.soundActive(coffeeBg, coffeeSymbol)
    controls.soundOff(forestBg, forestSymbol)
    controls.soundOff(fireBg, fireSymbol)
    controls.soundOff(rainBg, rainSymbol)
  })

  buttonFire.addEventListener('click', () => {
    sound.firePlay()
    controls.soundActive(fireBg, fireSymbol)
    controls.soundOff(coffeeBg, coffeeSymbol)
    controls.soundOff(forestBg, forestSymbol)
    controls.soundOff(rainBg, rainSymbol)
  })

  buttonPlay.addEventListener('click', function () {
    timer.countdown()
  })

  buttonStop.addEventListener('click', () => {
    timer.reset()
  })

  buttonMore.addEventListener('click', () => {
    timer.moreFive()
  })

  buttonMinum.addEventListener('click', () => {
    timer.minumFive()
  })
}
