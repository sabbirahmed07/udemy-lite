import { SingleCategory } from '@/components/shared/SingleCategory'
import { getCategories } from '@/lib/payoad-api/categories'

export default async function CategoryPage() {
  const categories = await getCategories()

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">All Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {categories.map((category) => (
          <SingleCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
