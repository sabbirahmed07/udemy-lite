import { Course, Lesson } from '@/payload-types'
import { getPayloadClient } from './payload'

// ✅ Courses API
export async function getCourses(limit = 5): Promise<Course[]> {
  const payload = await getPayloadClient()

  const { docs: courses } = await payload.find({
    collection: 'courses',
    limit,
    depth: 1, // populate thumbnail, category
  })

  return courses
}

// ✅ Courses API
export async function getCoursesByCategory(caetgoryId: string, limit = 5): Promise<Course[]> {
  const payload = await getPayloadClient()

  const { docs: courses } = await payload.find({
    collection: 'courses',
    where: {
      category: {
        equals: caetgoryId,
      },
    },
    limit,
    depth: 1, // populate thumbnail, category
  })

  return courses
}

export async function getSingleCourse(
  slug: string,
): Promise<(Course & { lessons?: Lesson[] }) | null> {
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'courses',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2, // ensures thumbnail relation is populated
  })

  const course = docs[0]

  if (!course) return null

  // 2️⃣ Fetch lessons related to this course
  const lessonsRes = await payload.find({
    collection: 'lessons',
    where: {
      course: { equals: course.id },
    },
    sort: 'createdAt', // optional: sort by creation order
  })

  const lessons = lessonsRes.docs

  // 3️⃣ Return course with lessons attached
  return {
    ...course,
    lessons,
  }
}
