'use client'

import { Category, Media } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'

export const SingleCategory = ({ category }: { category: Category }) => {
  const thumbnail = category.thumbnail as Media
  return (
    <Link href={`/courses?category=${category.id}`}>
      <div className="flex flex-col items-center gap-3 transition transform hover:-translate-y-1 cursor-pointer">
        {category.thumbnail ? (
          <Image
            src={thumbnail.url!}
            alt={category.title}
            width={80}
            height={80}
            className="rounded-full object-cover w-20 h-20"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            {category.title.charAt(0)}
          </div>
        )}
        <div className="text-center font-semibold py-1">{category.title}</div>
      </div>
    </Link>
  )
}
