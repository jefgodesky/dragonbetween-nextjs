import { resolve } from 'path'
import { writeFileSync } from 'fs'
import sass from 'sass'

const compiled = sass.compile(resolve(__dirname, '../scss/index.scss'))
writeFileSync(resolve(__dirname, '../public/style.css'), compiled.css, { encoding: 'utf8' })
