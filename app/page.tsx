import Hero from "@/components/hero"
import Marquee from "@/components/marquee"
import TextCarousel from "@/components/text-carousel"
import About from "@/components/about"
import MemeGallery from "@/components/meme-gallery"
import FloatingObjects from "@/components/floating-objects"
import ParallaxBackground from "@/components/parallax-background"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <ParallaxBackground />
      <FloatingObjects />

      <div className="relative z-10">
        <Hero />
        <Marquee />
        <TextCarousel />
        <About />
        <MemeGallery />
        <Footer />
      </div>
    </main>
  )
}
