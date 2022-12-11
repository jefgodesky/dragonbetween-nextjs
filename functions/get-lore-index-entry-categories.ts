import Category from '../types/Category'
import Categories from '../types/Categories'
import Knowledge from '../types/Knowledge'
import LoreIndexEntry from '../types/LoreIndexEntry'
import addSlugToCategory from './add-slug-to-category'
import clear from './clear'

export default function getLoreIndexEntryCategories (entry: LoreIndexEntry, knowledge: Knowledge, categories: Categories): Category[] {
  // Gat an array of Category objects, each packed up with its slug
  const all = Object.keys(categories).map(slug => addSlugToCategory(categories[slug], slug))
  // Turn entry.categories into something that's definitely an object, even if it's empty
  const cats = entry.categories === undefined ? {} : entry.categories
  // Get an array of Category objects that this entry is listed in, that this user knows about
  const listed = Object.keys(cats)
    .filter(cat => clear(knowledge, cats[cat] ?? 'true'))
    .map(slug => addSlugToCategory(categories[slug], slug))
  // Get an array of Category objects that have the sane slug (this entry is implicitly their main)
  const implicitMains = entry.slug === undefined
    ? []
    : all.filter(cat => cat.slug === entry.slug && cat.main === undefined)
  // Get an array of Category objects that explicitly name this entry as their main
  const explicitMains = entry.slug === undefined
    ? []
    : all.filter(cat => cat.main === entry.slug)
  // Combine our implicit mains, explicit mains, and listed Category objects...
  const combined = [...implicitMains, ...explicitMains, ...listed]
  // ...and then return the ones that this user knows about
  return combined.filter(cat => cat.secret === undefined || clear(knowledge, cat.secret))
}
