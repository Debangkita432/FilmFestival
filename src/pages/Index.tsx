import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FilmStrip from "@/components/FilmStrip";
import ImageCarousel from "@/components/ImageCarousel";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageNav />
      <Navigation />
      <HeroSection />
      <FilmStrip />
      <ImageCarousel />
      
      {/* Mission and Vision Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tight">
                Mission and Vision
              </h2>
              <div className="bg-background/10 border-8 border-background/30 p-8 rounded-lg">
                <p className="text-sm md:text-base leading-relaxed text-center">
                  In today's interconnected world, storytelling is a bridge that connects diverse cultures and ideas. Inspired by Cannes Film, Content Creators Festival & Award Ceremony 2025 celebrates the power of creativity and collaboration across global borders. Our mission is to honor the art of filmmaking and digital content creation, showcasing exceptional innovation in the creative industry.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-secondary/30 to-accent/30 blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop" 
                  alt="Kolkata Victoria Memorial" 
                  className="relative rounded-lg shadow-2xl w-full max-w-lg"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button variant="secondary" size="lg" className="px-12 py-6 text-xl">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
