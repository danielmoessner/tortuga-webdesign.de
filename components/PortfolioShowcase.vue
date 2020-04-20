<template>
  <nuxt-link class="showcase" to="/portfolio">
    <div class="tags">
      <span class="tag is-dark">{{ portfolioItem.title }}</span><br>
      <span class="tag is-light">{{ month }}</span>
      <span v-for="(tag, index) in portfolioItem.tags" :key="index" class="tag is-light">{{ tag }}</span>
    </div>
    <img class="showcase--height-set" :src="portfolioItem.image" :alt="portfolioItem.title">
    <div class="showcase--scroll">
      <img class="showcase--img" :src="portfolioItem.image" :alt="portfolioItem.title">
    </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    portfolioItem: {
      required: true
    }
  },
  data() {
    return {
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
    }
  },
  computed: {
    month() {
      const date = new Date(this.portfolioItem.date)
      return this.months[date.getMonth()] + " " + date.getFullYear()
    }
  },
  mounted() {
    window.addEventListener('load', function() {
      // methods
      function getMouseInsideElement(mouse, target) {
        const rect = target.getBoundingClientRect()
        const x = mouse.x
        const y = mouse.y
        return (rect.left <= x) && (x <= rect.right) && (rect.top <= y) && (y <= rect.bottom)
      }

      function getMousePositionInsideOfElement(event, target) {
        const rect = target.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const xProportion = x / this.getWidthWithBorder(target)
        const yProportion = y / this.getHeightWithBorder(target)
        return { x: xProportion, y: yProportion }
      }

      function getHeightWithMargin(el) {
        const styles = window.getComputedStyle(el)
        const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
        return this.getHeightWithBorder(el) + margin
      }

      function getHeightWithBorder(el) {
        return el.offsetHeight
      }

      function getHeightWithPadding(el) {
        return el.clientHeight
      }

      function getHeight(el) {
        const styles = window.getComputedStyle(el)
        return el.clientHeight - (parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom))
      }

      function getBoundingClientRectHeight(el) {
        const rect = el.getBoundingClientRect()
        return rect.height
      }

      function getWidthWithMargin(el) {
        var styles = window.getComputedStyle(el)
        var margin = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight)
        return el.offsetWidth + margin
      }

      function getWidthWithBorder(el) {
        return el.offsetWidth
      }

      function getWidthWithPadding(el) {
        return el.clientWidth
      }

      function getWidth(el) {
        const computedStyle = getComputedStyle(el)
        return el.clientWidth - (parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight))
      }

      function getTranslateY(obj) {
        const st = window.getComputedStyle(obj, null)
        const tr = st.getPropertyValue('-webkit-transform') ||
          st.getPropertyValue('-moz-transform') ||
          st.getPropertyValue('-ms-transform') ||
          st.getPropertyValue('-o-transform') ||
          st.getPropertyValue('transform') ||
          'fail...'
        let values = tr.split('(')[1]
        values = values.split(')')[0]
        values = values.split(',')
        return parseFloat(values[5])
      }
      // get all showcase elements
      const showcases = document.querySelectorAll('.showcase')
      showcases.forEach((showcase, index) => {
        // expand the showcase
        // get the height setting element
        const showcaseHeightSet = showcase.querySelector('.showcase--height-set')
        // expand the showcase if the element exists
        if (showcaseHeightSet) {
          setTimeout(() => { showcase.style.height = getBoundingClientRectHeight(showcaseHeightSet) + 'px' }, index ** 0.5 * 150)
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
          const howFarToMove = -getHeight(showcaseImage) + getHeight(showcaseHeightSet)
          // moves the image depending on the speed and with approx 60 fps
          function moveImage() {
            // get the position and add the speed so that it moves
            const newPosition = getTranslateY(showcaseImage) + speed
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
            const pos = getMousePositionInsideOfElement(event, showcase)
            if (pos.y >= 0.45 && pos.y <= 0.55) {
              speed = 0
            } else {
              speed = -10 * (pos.y - 0.5)
            }
          })
        }
      })
    })
  }
}

</script>
