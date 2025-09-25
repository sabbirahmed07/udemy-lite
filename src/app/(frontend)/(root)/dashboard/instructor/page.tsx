import React, { useState, useEffect } from 'react'

interface Course {
  id: string
  title: string
  price: number
}

export default function InstructorDashboard() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    async function fetchInstructorCourses() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/courses?where[instructor][equals]=<CURRENT_USER_ID>`,
      )
      const data = await res.json()
      setCourses(data.docs)
    }
    fetchInstructorCourses()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Instructor Dashboard</h1>
      <button className="mb-4 bg-green-600 text-white p-2 rounded">Create New Course</button>
      <ul className="space-y-2">
        {courses.map((course) => (
          <li key={course.id} className="border p-4 rounded shadow">
            {course.title} - ${course.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
