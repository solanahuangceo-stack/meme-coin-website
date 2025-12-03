import Hero from '@/components/hero';
import Marquee from '@/components/marquee';
import TextCarousel from '@/components/text-carousel';
import About from '@/components/about';
import MemeGallery from '@/components/meme-gallery';
import FloatingObjects from '@/components/floating-objects';
import ParallaxBackground from '@/components/parallax-background';
import Footer from '@/components/footer';
import CryptoPlatforms from '@/components/lenders';

export default function Home() {
  return (
    <main className="bg-background relative min-h-screen">
      <ParallaxBackground />
      <FloatingObjects />

      <div className="relative z-10">
        <Hero />
        <Marquee />
        <TextCarousel />
        <About />
        <CryptoPlatforms />
        <MemeGallery />

        <Footer />
      </div>
    </main>
  );
}
