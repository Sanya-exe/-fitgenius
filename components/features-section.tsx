import { Brain, TrendingUp, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="relative mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Powered by Advanced AI</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-gray-400">
            Revolutionary features that adapt to your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
         
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 transition-transform group-hover:scale-110">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">AI Personal Trainer</h3>
            <p className="leading-relaxed text-gray-400">
              Advanced machine learning creates personalized workout plans based on your goals, fitness level, and
              progress. Adapts in real-time to your performance.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 transition-transform group-hover:scale-110">
              <TrendingUp className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Smart Progress Tracking</h3>
            <p className="leading-relaxed text-gray-400">
              Comprehensive analytics dashboard with AI insights. Track strength gains, body composition, and receive
              predictive insights on your fitness trajectory.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 transition-transform group-hover:scale-110">
              <Users className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Community Challenges</h3>
            <p className="leading-relaxed text-gray-400">
              Join AI-curated fitness challenges matched to your level. Compete with friends, earn achievements, and
              stay motivated with our gamified approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
