import { Sparkles } from "lucide-react"
export default function FAQ() {
    return(
        <section id="faq" className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  <Sparkles className="mr-1 h-4 w-4" />
                  <span>FAQ</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about TaskMaster.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">How do I get started with TaskMaster?</h3>
                <p className="mt-2 text-muted-foreground">
                  Getting started is easy! Simply sign up for a free account, and you can start creating and organizing
                  your tasks right away.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">Can I use TaskMaster on multiple devices?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes! TaskMaster is available on web, iOS, and Android, so you can access your tasks from anywhere,
                  anytime.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">Is my data secure?</h3>
                <p className="mt-2 text-muted-foreground">
                  Absolutely. We use industry-standard encryption to protect your data, and we never share your
                  information with third parties.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">Can I share my tasks with others?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, our Pro and Team plans allow you to share tasks and lists with others for seamless collaboration.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">Can I cancel my subscription at any time?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your
                  paid features until the end of your billing cycle.
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}