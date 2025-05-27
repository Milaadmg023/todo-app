import { Star } from "lucide-react"

export default function Testimonials() {
    return(
        <section id="testimonials" className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  <Star className="mr-1 h-4 w-4" />
                  <span>Testimonials</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by thousands of users</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. See what our users have to say about TaskMaster.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Marketing Manager</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "TaskMaster has completely transformed how I manage my work. I'm more organized and productive than
                  ever before."
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                  <div>
                    <h4 className="font-bold">David Chen</h4>
                    <p className="text-sm text-muted-foreground">Software Developer</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The collaboration features are amazing. My team and I can easily share tasks and track our progress
                  together."
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                  <div>
                    <h4 className="font-bold">Emily Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Student</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "As a student, TaskMaster helps me keep track of all my assignments and deadlines. It's a lifesaver!"
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}