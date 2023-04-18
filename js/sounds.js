export default function Playsound() {

  const forestSound = new Audio('./audio/Floresta.wav')
  const rainSound = new Audio('./audio/Chuva.wav')
  const coffeeSound = new Audio('./audio/Cafeteria.wav')
  const fireSound = new Audio('./audio/Lareira.wav')
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  forestSound.loop = true
  rainSound.loop = true
  coffeeSound.loop = true
  fireSound.loop = true

  function forestPlay(){
    forestSound.play()
    rainSound.pause()
    coffeeSound.pause()
    fireSound.pause()
  }
  function rainPlay(){
    rainSound.play()
    forestSound.pause()
    coffeeSound.pause()
    fireSound.pause()
  }
  function coffeePlay(){
    coffeeSound.play()
    forestSound.pause()
    rainSound.pause()
    fireSound.pause()
  }
  function firePlay(){
    fireSound.play()
    forestSound.pause()
    rainSound.pause()
    coffeeSound.pause()
  }
  
  function timeEnd() {
    kitchenTimer.play()
  }

  
  return {
    forestPlay,
    rainPlay,
    coffeePlay,
    firePlay,
    timeEnd
  }
}
