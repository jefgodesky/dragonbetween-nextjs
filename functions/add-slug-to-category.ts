import rfdc from 'rfdc'
import Category from '../types/Category'

const clone = rfdc()

export default function addSlugToCategory (category: Category, slug: string): Category {
  const working = clone(category)
  working.slug = slug
  return working
}
