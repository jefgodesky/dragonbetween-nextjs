const { writeFileSync } = require('fs')
const sass = require('sass')
const compiled = sass.compile(__dirname + '/../scss/index.scss')
writeFileSync(__dirname + '/../public/style.css', compiled.css, { encoding: 'utf8' })
