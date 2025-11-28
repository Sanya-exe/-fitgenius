"use client"

import { Dumbbell, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-sm bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[linear-gradient(to_bottom_right,var(--tw-gradient-stops))] from-purple-600 to-pink-600">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">FitGenius</span>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-gray-300 transition-colors hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-sm text-gray-300 transition-colors hover:text-white">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm text-gray-300 transition-colors hover:text-white">
              Testimonials
            </a>
            <button className="inline-flex h-9 items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10">
              Sign In
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-3">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-base text-gray-300 transition-colors hover:text-white hover:bg-white/5 rounded-md"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-base text-gray-300 transition-colors hover:text-white hover:bg-white/5 rounded-md"
            >
              pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-base text-gray-300 transition-colors hover:text-white hover:bg-white/5 rounded-md"
            >
              Testimonials
            </a>
            <button className="w-full mx-4 inline-flex h-9 items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}


