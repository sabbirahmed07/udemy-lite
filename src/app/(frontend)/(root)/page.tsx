import { getCategories } from '@/lib/payoad-api/categories'
import { getCourses } from '@/lib/payoad-api/course'

import CategoriesSection from '@/components/home/categories'
import CoursesSection from '@/components/home/courses'
import HeroSection from '@/components/home/hero'

export default async function HomePage() {
  const categories = await getCategories()
  const courses = await getCourses()

  return (
    <div className="px-6 md:px-12 py-8 space-y-12">
      <HeroSection />
      <CategoriesSection categories={categories} />
      <CoursesSection courses={courses} />
    </div>
  )
}
