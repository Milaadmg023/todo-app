import { Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              <Clock className="mr-1 h-4 w-4" />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Simple steps to boost your productivity
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Getting started with TaskMaster is easy. Follow these simple steps
              to organize your tasks and boost your productivity.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              1
            </div>
            <h3 className="text-xl font-bold">Sign Up</h3>
            <p className="text-center text-muted-foreground">
              Create your free account in seconds. No credit card required.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              2
            </div>
            <h3 className="text-xl font-bold">Add Tasks</h3>
            <p className="text-center text-muted-foreground">
              Create and organize your tasks with due dates, priorities, and
              labels.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              3
            </div>
            <h3 className="text-xl font-bold">Stay Productive</h3>
            <p className="text-center text-muted-foreground">
              Complete tasks, track your progress, and boost your productivity.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button size="lg" asChild>
            <Link href="/signup">Get Started for Free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
