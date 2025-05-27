import Image from "next/image"
import  Link from "next/link"
import { CheckCircle, Sparkles } from "lucide-react"
import { Button } from "../ui/button"

export default function About() {
    return(
         <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Sparkles className="mr-1 h-4 w-4" />
                  <span>Organize your life with ease</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Stay organized and productive with TaskMaster
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The simple yet powerful todo app that helps you manage your tasks, organize your life, and boost
                    your productivity.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">Get Started for Free</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#how-it-works">See How It Works</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[300px] sm:h-[400px] sm:w-[350px] lg:h-[500px] lg:w-[450px]">
                  <Image
                    src="/placeholder.svg?height=500&width=450"
                    alt="TaskMaster App Screenshot"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}