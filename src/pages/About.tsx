import Navigation from "@/components/Navigation";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <PageNav />
      <Navigation />
      
      {/* About Us Section */}
      <section className="bg-primary text-primary-foreground py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tight">
                About Us
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                Smart Society is a US and Canada-based non-profit society with the goal of creating a pool of unique ideas and thoughts in the form of short, power-packed talks for propelling others to excel in their respective fields. It serves as a platform for makers, artists, researchers, and technologists to bring forth their views to the entire world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 border-4 border-black h-64"></div>
              <div className="bg-black/30 border-4 border-black h-64"></div>
              <div className="bg-black/30 border-4 border-black h-64"></div>
              <div className="bg-black/30 border-4 border-black h-64"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve Your Spot Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="bg-background/20 p-8 rounded-lg border-8 border-background/40">
                <div className="w-64 h-64 bg-background/30 rounded-lg"></div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tight">
                Reserve Your Spot
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                Join us for this special event and be a part of an unforgettable experience. Your presence will add value, and we look forward to welcoming you.
              </p>
              <button className="bg-background text-primary px-12 py-4 rounded-lg font-black text-xl uppercase tracking-wide hover:bg-background/90 transition-colors">
                Book Now!
              </button>
              <div className="mt-12 inline-block">
                <div className="bg-accent/20 border-8 border-accent px-12 py-8 rounded-lg">
                  <div className="w-48 h-32 bg-accent/30 rounded"></div>
                  <p className="text-2xl font-black uppercase mt-4">Visitor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
