import { APP_NAME, APP_DESCRIPTION } from '@/lib/constants'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* main should flex-grow */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
