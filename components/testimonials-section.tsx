import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Loved by Thousands</h2>
          <p className="text-pretty text-lg leading-relaxed text-gray-400">Real results from real people</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Testimonial 1: Sarah Johnson */}
          <div className="group rounded-2xl border border-purple-500/30 bg-white/5 p-8 backdrop-blur-sm shadow-lg transition-all hover:scale-105 hover:border-purple-500/60 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/20">
            {/* Avatar with Initials */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-lg font-bold text-white shadow-lg">
                SJ
              </div>
              <div>
                <div className="font-bold text-white">Sarah Johnson</div>
                <div className="text-sm text-gray-400">Fitness Enthusiast</div>
              </div>
            </div>

            {/* Star Rating */}
            <div className="mb-4 flex gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>

            {/* Review Text */}
            <p className="leading-relaxed text-gray-300">
              "FitGenius changed my life! Lost 30 pounds in 4 months. The AI trainer knows exactly what I need every
              single day. Best investment ever!"
            </p>
          </div>

          {/* Testimonial 2: Michael Chen */}
          <div className="group rounded-2xl border border-purple-500/30 bg-white/5 p-8 backdrop-blur-sm shadow-lg transition-all hover:scale-105 hover:border-purple-500/60 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/20">
            {/* Avatar with Initials */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-lg font-bold text-white shadow-lg">
                MC
              </div>
              <div>
                <div className="font-bold text-white">Michael Chen</div>
                <div className="text-sm text-gray-400">Software Engineer</div>
              </div>
            </div>

            {/* Star Rating */}
            <div className="mb-4 flex gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>

            {/* Review Text */}
            <p className="leading-relaxed text-gray-300">
              "As a busy professional, I needed something flexible. The AI adapts to my schedule and energy levels. It's
              like having a personal trainer in my pocket!"
            </p>
          </div>

          {/* Testimonial 3: Emily Parker */}
          <div className="group rounded-2xl border border-purple-500/30 bg-white/5 p-8 backdrop-blur-sm shadow-lg transition-all hover:scale-105 hover:border-purple-500/60 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/20">
            {/* Avatar with Initials */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-lg font-bold text-white shadow-lg">
                EP
              </div>
              <div>
                <div className="font-bold text-white">Emily Parker</div>
                <div className="text-sm text-gray-400">Personal Trainer</div>
              </div>
            </div>

            {/* Star Rating */}
            <div className="mb-4 flex gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>

            {/* Review Text */}
            <p className="leading-relaxed text-gray-300">
              "The progress tracking and insights are incredible. I can see exactly how I'm improving. The community
              challenges keep me motivated every day!"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
