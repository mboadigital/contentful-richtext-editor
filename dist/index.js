
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./field-editor-rich-text.cjs.production.min.js')
} else {
  module.exports = require('./field-editor-rich-text.cjs.development.js')
}
