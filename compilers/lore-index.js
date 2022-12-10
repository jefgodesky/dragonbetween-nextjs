const { readdirSync, existsSync, readFileSync, writeFileSync } = require('fs')
const { resolve  } = require('path')

const index = {}
const lore = resolve(__dirname, '../lore')
const indices = readdirSync(lore)
  .map(dir => resolve(lore, dir, './index.json'))
  .filter(index => existsSync(index))

for (const i of indices) {
  const slug = i.substring(lore.length + 1, i.lastIndexOf('/index.json'))
  const data = JSON.parse(readFileSync(i))
  for (const key of Object.keys(data.text)) {
    const text = readFileSync(resolve(i.substring(0, i.lastIndexOf('/index.json')), data.text[key]))
    data.text[key] = text.toString()
  }
  index[slug] = data
}

writeFileSync(resolve(lore, './index.json'), JSON.stringify(index), { encoding: 'utf8' })
