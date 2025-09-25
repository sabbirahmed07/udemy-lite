'use client'

import { Card, CardContent, CardHeader, CardFooter } from '../ui/card'
import {
  CourseThumbnail,
  CourseTitle,
  CourseDescription,
  CourseMeta,
  CourseCTA,
} from '../shared/SingleCourse'
import { Course, Media } from '@/payload-types'

export default function CoursesSection({ courses }: { courses: Course[] }) {
  return (
    <section className="px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Latest Courses</h2>

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
    </section>
  )
}
