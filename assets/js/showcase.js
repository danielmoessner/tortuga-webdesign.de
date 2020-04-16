const utils = require('./utils')

window.addEventListener('load', function () {
  // get all showcase elements
  const showcases = document.querySelectorAll('.showcase')
  showcases.forEach((showcase, index) => {
    // expand the showcase
    // get the height setting element
    const showcaseHeightSet = showcase.querySelector('.showcase--height-set')
    // expand the showcase if the element exists
    if (showcaseHeightSet) {
      setTimeout(() => { showcase.style.height = utils.getBoundingClientRectHeight(showcaseHeightSet) + 'px' }, index ** 0.5 * 150)
    }
    // move the image
    // get the image of the showcase element
    const showcaseImage = showcase.querySelector('.showcase--img')
    // make it move if it exists
    if (showcaseImage && showcaseHeightSet) {
      // variable to check if the image is already moving
      let imageMoving = false
      // interval which keeps the image moving
      let moveImageInterval = ''
      // speed variable can change depending on the mouse position
      let speed = 0
      // calculate how far the image is allowed to move
      const howFarToMove = -utils.getHeight(showcaseImage) + utils.getHeight(showcaseHeightSet)
      // moves the image depending on the speed and with approx 60 fps
      function moveImage () {
        // get the position and add the speed so that it moves
        const newPosition = utils.getTranslateY(showcaseImage) + speed
        // check if it is allowed to move up or down and move it
        if (newPosition > 0) {
          showcaseImage.style.transform = 'translateY(0)'
        } else if (newPosition < howFarToMove) {
          showcaseImage.style.transform = 'translateY(' + howFarToMove + 'px)'
        } else {
          showcaseImage.style.transform = 'translateY(' + newPosition + 'px)'
        }
        // keep it moving with approx 60fps
        moveImageInterval = setTimeout(moveImage, 16)
      }
      // start the moving of the image
      showcase.addEventListener('mouseover', (event) => {
        showcaseImage.style.willChange = 'transform'
        if (!imageMoving) moveImage()
        imageMoving = true
      })
      // reset if the mouse doesn't hover the showcase
      showcase.addEventListener('mouseleave', (event) => {
        showcaseImage.style.willChange = 'auto'
        clearInterval(moveImageInterval)
        imageMoving = false
      })
      // set the speed depending on the mouse position
      showcase.addEventListener('mousemove', (event) => {
        const pos = utils.getMousePositionInsideOfElement(event, showcase)
        if (pos.y >= 0.45 && pos.y <= 0.55) {
          speed = 0
        } else {
          speed = -10 * (pos.y - 0.5)
        }
      })
    }
  })
})
