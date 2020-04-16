const utils = require('./utils')

document.addEventListener('DOMContentLoaded', () => {
  const workComponents = document.querySelectorAll('.work')

  function toggleScrollBehavior (state) {
    workComponents.forEach(el => {
      const backgroundImage = el.querySelector('.work--image-div')
      const hoverInfo = el.querySelector('.work--hover-info')
      if (state === 'off') {
        backgroundImage.style.overflowY = 'hidden'
        hoverInfo.classList.remove('is-visibility-hidden')
      } else if (state === 'on' && utils.getMouseInsideElement(mouse, el)) {
        backgroundImage.style.overflowY = 'scroll'
        hoverInfo.classList.add('is-visibility-hidden')
      }
    })
  }

  const mouse = { x: 0, y: 0 }
  document.onmousemove = function (e) {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  document.addEventListener('keyup', function (event) {
    if (event.key === 'x' || event.key === 'X') toggleScrollBehavior('off')
  })
  document.addEventListener('keydown', function (event) {
    if (event.key === 'x' || event.key === 'X') toggleScrollBehavior('on')
  })
})
