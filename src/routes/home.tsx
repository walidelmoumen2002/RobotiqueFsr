import Hero from "@components/hero"
import Features from "@components/features"
import FeaturesBlocks from "@components/features-blocks"
import Testimonials from "@components/testimonials"
import Newsletter from "@components/newsletter"

function Home() {
    return (
        <>
            <Hero />
            <Features />
            <FeaturesBlocks />
            <Testimonials />
            <Newsletter />
        </>
    )
}

export default Home
