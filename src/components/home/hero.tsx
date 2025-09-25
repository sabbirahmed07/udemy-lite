'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Learn Anything, Anytime, Anywhere</h1>
      <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
        Join thousands of learners and explore high-quality courses taught by expert instructors.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/courses"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Browse Courses
        </Link>
        <Link
          href="/signup"
          className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-900 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
