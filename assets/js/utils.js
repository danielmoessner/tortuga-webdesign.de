
module.exports = {
  getMouseInsideElement (mouse, target) {
    const rect = target.getBoundingClientRect()
    const x = mouse.x
    const y = mouse.y
    return (rect.left <= x) && (x <= rect.right) && (rect.top <= y) && (y <= rect.bottom)
  },
  getMousePositionInsideOfElement (event, target) {
    const rect = target.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const xProportion = x / this.getWidthWithBorder(target)
    const yProportion = y / this.getHeightWithBorder(target)
    return { x: xProportion, y: yProportion }
  },
  getHeightWithMargin (el) {
    const styles = window.getComputedStyle(el)
    const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
    return this.getHeightWithBorder(el) + margin
  },
  getHeightWithBorder (el) {
    return el.offsetHeight
  },
  getHeightWithPadding (el) {
    return el.clientHeight
  },
  getHeight (el) {
    const styles = window.getComputedStyle(el)
    return el.clientHeight - (parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom))
  },
  getBoundingClientRectHeight (el) {
    const rect = el.getBoundingClientRect()
    return rect.height
  },
  getWidthWithMargin (el) {
    var styles = window.getComputedStyle(el)
    var margin = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight)
    return el.offsetWidth + margin
  },
  getWidthWithBorder (el) {
    return el.offsetWidth
  },
  getWidthWithPadding (el) {
    return el.clientWidth
  },
  getWidth (el) {
    const computedStyle = getComputedStyle(el)
    return el.clientWidth - (parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight))
  },
  getTranslateY (obj) {
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
}
