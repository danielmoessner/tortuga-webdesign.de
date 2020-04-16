// reflect the background of the header
document.addEventListener('DOMContentLoaded', () => {
  const background = document.querySelector('.header-reflection')
  const header = document.querySelector('.reflection-header')
  if (header && background) {
    // set necessary styles
    header.style.position = 'relative'
    header.style.zIndex = 2
    background.parentElement.style.overflow = 'visible'
    background.parentElement.style.position = 'relative'
    // image width and height: 2440x1373
    let availableHeight = (1373 / 2440 * header.clientWidth - header.clientHeight)
    availableHeight = Math.max(0, availableHeight)
    // set styles depending on the screen size
    background.style.height = header.clientHeight + availableHeight + 'px'
    background.style.top = -availableHeight / 2 + 'px'
  }
})
