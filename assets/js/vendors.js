// fontawesome-free
// aos
import AOS from 'aos'

// accordion
import Accordion from 'accordion-js'

// cookieconsent
import cc from 'cookieconsent'

require.context('../../node_modules/@fortawesome/fontawesome-free/webfonts', true, /\.(woff|woff2|eot|ttf|svg|truetype|embedded-opentype)$/)
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 600,
    disable: 'mobile',
    once: 'true'
  })
})
window.addEventListener('load', () => {
  AOS.refresh()
})
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.faq-container') !== null) {
    new Accordion('.faq-container', {
      elementClass: 'faq',
      questionClass: 'faq--question',
      answerClass: 'faq--answer',
      closeOthers: false
    })
  }
})
document.addEventListener('DOMContentLoaded', () => {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#000000',
        text: '#ffffff'
      },
      button: {
        background: '#282629',
        text: '#ffffff'
      }
    },
    theme: 'edgeless',
    position: 'bottom-right',
    type: 'opt-in',
    content: {
      message: 'Wir benutzen Cookies. Wenn Sie die Website weiter nutzen, gehen wir von Ihrem Einverständnis aus.',
      dismiss: 'Ablehnen',
      allow: 'Okay!',
      deny: 'Ablehnen',
      link: 'Mehr erfahren',
      href: 'https://tortuga-webdesign.de/datenschutz/'
    }
  })
})
