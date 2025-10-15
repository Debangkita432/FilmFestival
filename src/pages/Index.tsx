import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FilmStrip from "@/components/FilmStrip";
import ImageCarousel from "@/components/ImageCarousel";
import PageNav from "@/components/PageNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageNav />
      <Navigation />
      <HeroSection />
      <FilmStrip />
      <ImageCarousel />
    </div>
  );
};

export default Index;
