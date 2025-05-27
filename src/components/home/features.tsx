import {
  ListChecks,
  Clock,
  Users,
  Sparkles,
  Star,
  CheckCircle,
} from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="bg-muted py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              <Sparkles className="mr-1 h-4 w-4" />
              <span>Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need to stay organized
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              TaskMaster comes packed with all the features you need to organize
              your tasks and boost your productivity.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <ListChecks className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Task Management</h3>
            <p className="text-center text-muted-foreground">
              Create, organize, and prioritize your tasks with ease. Add due
              dates, labels, and more.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Reminders</h3>
            <p className="text-center text-muted-foreground">
              Never miss a deadline with customizable reminders and
              notifications for your tasks.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Collaboration</h3>
            <p className="text-center text-muted-foreground">
              Share tasks and lists with friends, family, or colleagues for
              seamless collaboration.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Smart Lists</h3>
            <p className="text-center text-muted-foreground">
              Automatically organize your tasks into smart lists based on due
              dates, priorities, and more.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Customization</h3>
            <p className="text-center text-muted-foreground">
              Personalize your experience with themes, custom lists, and task
              views to suit your workflow.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Cross-Platform</h3>
            <p className="text-center text-muted-foreground">
              Access your tasks from anywhere with our web, mobile, and desktop
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
