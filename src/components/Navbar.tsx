'use client'

import Link from 'next/link'
import ModeToggle from './shared/ModeToggle'
import { APP_NAME } from '@/lib/constants'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { EllipsisVertical } from 'lucide-react'

const links = [
  { title: 'Home', href: '/' },
  { title: 'Courses', href: '/courses' },
  { title: 'Categories', href: '/categories' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
]

function MenuIcon() {
  return (
    <div className="flex items-center gap-1">
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-1">
        <ModeToggle />
        {links.map((item) => (
          <Button asChild variant="ghost" key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </Button>
        ))}
      </nav>

      {/* Mobile Menu */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-2">
            <EllipsisVertical className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-2">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            {links.map((item) => (
              <Button asChild variant="ghost" key={item.href} className="w-full justify-start">
                <Link href={item.href}>{item.title}</Link>
              </Button>
            ))}
            <SheetDescription />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  )
}

export default function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl lg:text-2xl">{APP_NAME}</span>
        </Link>

        {/* Menu */}
        <MenuIcon />
      </div>
    </header>
  )
}
