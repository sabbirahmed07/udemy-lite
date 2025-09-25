// components/shared/CourseParts.tsx
'use client'

import Image from 'next/image'
import { Course, Category, Media } from '@/payload-types'
import Link from 'next/link'
import { Button } from '../ui/button'

/* --- Thumbnail --- */
export const CourseThumbnail = ({
  thumbnail,
  title,
}: {
  thumbnail?: Media | null
  title: string
}) => (
  <div className="relative w-full h-48 rounded-lg overflow-hidden">
    {thumbnail?.url ? (
      <Image
        src={thumbnail.url}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    ) : (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
        No Image
      </div>
    )}
  </div>
)

/* --- Title --- */
export const CourseTitle = ({ title }: { title: string }) => (
  <h2 className="text-lg font-bold text-center line-clamp-2">{title}</h2>
)

/* --- Description --- */
export const CourseDescription = ({ description }: { description?: string | null }) => (
  <div className="group relative">
    <p className="text-sm text-gray-600 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
      {description}
    </p>
  </div>
)

/* --- Meta Info (Category, Price, Updated) --- */
export const CourseMeta = ({ course }: { course: Course }) => {
  const category = course.category as Category

  return (
    <div className="space-y-1 text-sm">
      {category?.title && (
        <p>
          <span className="font-semibold">Category:</span> {category.title}
        </p>
      )}
      {course.price && (
        <p>
          <span className="font-semibold">Price:</span> ${course.price}
        </p>
      )}
      <p>
        <span className="font-semibold">Updated:</span>{' '}
        {new Date(course.updatedAt).toLocaleDateString()}
      </p>

      <p>
        <span className="font-semibold">Lessons:</span> {course.lessonCount}
      </p>
    </div>
  )
}

/* --- Call To Action Button --- */
export const CourseCTA = ({ slug }: { slug: string }) => (
  <Button asChild className="w-full">
    <Link href={`/courses/${slug}`}>View Course</Link>
  </Button>
)
