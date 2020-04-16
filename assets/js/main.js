require('./navbar.js')
require('./vendors.js')
require('./header-reflection.js')
require('./showcase.js')
require('./fouc-avoid.js')
require('./work-scroll.js')
require('./contact-form.js')

require('../styles/main.scss')

require.context('../fonts', true, /\.(woff|woff2|eot|ttf|svg|truetype|embedded-opentype)$/)

require.context('../images', true, /\.(png|jpg|svg)$/)
