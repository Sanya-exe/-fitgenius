import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="relative mx-auto max-w-7xl">
        
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Choose Your Plan</h2>
          <p className="text-pretty text-lg leading-relaxed text-gray-400">Start your transformation today</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
          
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/30 hover:bg-white/10">
            <h3 className="mb-2 text-2xl font-bold text-white">Starter</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$9</span>
              <span className="text-gray-400">/month</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">Basic AI workout plans</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">Progress tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">Community access</span>
              </li>
            </ul>

            <button className="inline-flex h-9 w-full items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-gray-700">
              Get Started
            </button>
          </div>

          <div className="group relative rounded-2xl border-2 border-purple-500/60 bg-white/10 p-8 shadow-2xl shadow-purple-500/30 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500 hover:shadow-purple-500/50 md:scale-105">
           
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="rounded-full bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-purple-600 to-pink-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                Most Popular
              </div>
            </div>

            <h3 className="mb-2 text-2xl font-bold text-white">Pro</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$19</span>
              <span className="text-gray-400">/month</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">Advanced AI personalization</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">Real-time form correction</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">Nutrition guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">Priority support</span>
              </li>
            </ul>

            <button className="inline-flex h-9 w-full items-center justify-center rounded-md bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50">
              Get Started
            </button>
          </div>

        
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/30 hover:bg-white/10">
            <h3 className="mb-2 text-2xl font-bold text-white">Elite</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white">$39</span>
              <span className="text-gray-400">/month</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">Everything in Pro</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">1-on-1 coaching sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">Custom meal plans</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 shrink-0 text-purple-400" />
                <span className="text-gray-300">24/7 premium support</span>
              </li>
            </ul>

            <button className="inline-flex h-9 w-full items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-gray-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

