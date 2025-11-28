import { Dumbbell } from "lucide-react"

export function Navbar() {
  return (
    <nav className="border-b border-white/10 backdrop-blur-sm">
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
            <a href="#about" className="text-sm text-gray-300 transition-colors hover:text-white">
              About
            </a>
            <button className="inline-flex h-9 items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
