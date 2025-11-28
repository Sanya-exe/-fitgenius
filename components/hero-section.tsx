import { Play, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
  
      <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 animate-pulse rounded-full bg-pink-600/20 blur-3xl animation-delay-1000" />

      <div className="relative mx-auto max-w-5xl text-center">
       
        <div className="mb-8 inline-flex animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
            </span>
            AI-Powered Fitness Revolution
          </div>
        </div>

        <h1 className="mb-6 animate-fade-in-up text-5xl font-bold leading-tight text-white animation-delay-200 sm:text-6xl lg:text-7xl">
          <span className="text-balance">Transform Your Body</span>
          <br />
          <span className="bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            With AI Intelligence
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl animate-fade-in-up text-pretty text-lg leading-relaxed text-gray-300 animation-delay-400 sm:text-xl">
          Experience personalized workout plans, real-time form correction, and adaptive training that evolves with you.
          Your AI fitness coach is available 24/7.
        </p>

        <div className="mb-16 flex animate-fade-in-up flex-col items-center justify-center gap-4 animation-delay-600 sm:flex-row">
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-purple-600 to-pink-600 px-8 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50">
            <span className="relative">Start Free Trial</span>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--tw-gradient-stops))] from-purple-700 to-pink-700 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
          <button className="group inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/10">
            <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Watch Demo
          </button>
        </div>

        <div className="animate-fade-in-up animation-delay-800">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-white/10">
              <div className="mb-2 text-3xl font-bold text-white transition-transform group-hover:scale-110 sm:text-4xl">
                50K+
              </div>
              <div className="text-sm text-gray-400 sm:text-base">Active Users</div>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-white/10">
              <div className="mb-2 flex items-center justify-center gap-2 text-3xl font-bold text-white transition-transform group-hover:scale-110 sm:text-4xl">
                4.9
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400 sm:h-8 sm:w-8" />
              </div>
              <div className="text-sm text-gray-400 sm:text-base">App Rating</div>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-white/10">
              <div className="mb-2 text-3xl font-bold text-white transition-transform group-hover:scale-110 sm:text-4xl">
                100M+
              </div>
              <div className="text-sm text-gray-400 sm:text-base">Workouts Done</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



