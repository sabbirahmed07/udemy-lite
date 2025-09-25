// app/courses/[slug]/page.tsx
import {
  CourseThumbnail,
  CourseTitle,
  CourseDescription,
  CourseMeta,
} from '@/components/shared/SingleCourse'
import { getSingleCourse } from '@/lib/payoad-api/course'
import { notFound } from 'next/navigation'
import { Media } from '@/payload-types'

export default async function CourseDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const course = await getSingleCourse(params.slug)

  if (!course) {
    notFound()
  }

  const thumbnail = course.thumbnail as Media | null

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <CourseThumbnail thumbnail={thumbnail} title={course.title} />
      <CourseTitle title={course.title} />
      <CourseDescription description={course.description} />
      <CourseMeta course={course} />

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
        {/* {course.lessons?.map((lesson, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">{lesson.title}</h3>
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: lesson.content }}
            />
          </div>
        ))} */}
      </div>
    </div>
  )
}
