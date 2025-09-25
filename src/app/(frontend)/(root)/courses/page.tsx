import { getCourses, getCoursesByCategory } from '@/lib/payoad-api/course'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import {
  CourseThumbnail,
  CourseTitle,
  CourseDescription,
  CourseMeta,
  CourseCTA,
} from '@/components/shared/SingleCourse'
import { Course, Media } from '@/payload-types'

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>
}) {
  const category = (await searchParams).category

  let courses: Course[] = []
  if (category) {
    console.log('category', category)

    courses = await getCoursesByCategory(category)
  }

  courses = await getCourses()

  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold mb-6">All Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {courses.map((course) => {
          const thumbnail = course.thumbnail as Media
          return (
            <Card
              key={course.id}
              className="overflow-hidden shadow-md hover:shadow-lg transition duration-200"
            >
              <CardHeader>
                <CourseThumbnail thumbnail={thumbnail} title={course.title} />
              </CardHeader>
              <CardContent className="space-y-3">
                <CourseTitle title={course.title} />
                <CourseDescription description={course.description} />
                <CourseMeta course={course} />
              </CardContent>
              <CardFooter>
                <CourseCTA slug={course.slug!} />
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
