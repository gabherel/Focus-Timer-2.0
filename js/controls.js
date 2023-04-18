export default function() {
  function soundActive(bg, form) {
    bg.style.fill = '#02799D'
    form.style.fill = '#FFFFFF'
  }
  
  function soundOff(bg, form) {
    bg.style.fill = '#E1E1E6'
    form.style.fill = '#323238'
  }

  return {
    soundActive,
    soundOff
  }
}

