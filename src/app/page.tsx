// Components
import Header from "@/components/home/header"
import Features from "@/components/home/features"
import HowItWorks from "@/components/home/how_it_works"
import GetStart from "@/components/home/get_start"
import FAQ from "@/components/home/faq"
import Footer from "@/components/home/footer"
import About from "@/components/home/about"
import Pricing from "@/components/home/pricing"
import Testimonials from "@/components/home/testimonials"

export default function Home() {
    return(
        <div className="flex min-h-[100dvh] flex-col">
            <Header/>
            <main className="flex-1">
                <About/>
                <Features/>
                <HowItWorks/>
                <Testimonials/>
                <Pricing/>
                <FAQ/>
                <GetStart/>
            </main>
            <Footer/>
        </div>
    )
}