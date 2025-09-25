'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Category, Media } from '@/payload-types'

export default function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {categories.map((category) => {
          const thumbnail = category.thumbnail as Media
          return (
            <Link key={category.id} href={`/courses?category=${category.id}`}>
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
        })}
      </div>
    </section>
  )
}
