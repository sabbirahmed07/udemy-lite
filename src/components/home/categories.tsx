'use client'

import { Category } from '@/payload-types'
import { SingleCategory } from '../shared/SingleCategory'

export default function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {categories.map((category) => (
          <SingleCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
