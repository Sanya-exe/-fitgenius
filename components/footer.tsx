import { Dumbbell } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-purple-500/30 bg-slate-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Footer Grid - 4 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">FitGenius</span>
            </div>
            <p className="text-pretty text-sm leading-relaxed text-gray-400">
              Transform your fitness journey with AI-powered intelligence.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-gray-400 transition-colors hover:text-purple-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-400 transition-colors hover:text-purple-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#download" className="text-sm text-gray-400 transition-colors hover:text-purple-400">
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-gray-400 transition-colors hover:text-purple-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm text-gray-400 transition-colors hover:text-purple-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-gray-400 transition-colors hover:text-purple-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="text-sm text-gray-400 transition-colors hover:text-purple-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 transition-colors hover:text-purple-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-sm text-gray-400 transition-colors hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 FitGenius. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
