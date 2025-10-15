import Navigation from "@/components/Navigation";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";

const Jury = () => {
  return (
    <div className="min-h-screen">
      <PageNav />
      <Navigation />
      
      {/* Jury Panel Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center tracking-tight">
            Our Jury Panel
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((num) => (
              <div key={num} className="text-center">
                <div className="bg-black border-8 border-black mb-4 relative">
                  <div className="aspect-square bg-gradient-to-b from-sky-200 to-sky-100 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-green-400 to-green-500"></div>
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-16 bg-white/60 rounded-full"></div>
                  </div>
                  <div className="absolute top-2 left-2 right-2 flex justify-between text-xs text-white font-mono">
                    <span>||A</span>
                    <span>12</span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs text-white font-mono">
                    <span>||A</span>
                    <span>12</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                  Jury {num}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tight">
                Schedule
              </h2>
              <div className="space-y-6">
                {[
                  "Registration Opens: December 1, 2024",
                  "Early Bird Deadline: January 15, 2025",
                  "Standard Deadline: February 28, 2025",
                  "Final Deadline: March 31, 2025",
                  "Festival Screening: January 10, 2026"
                ].map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/30 border-4 border-black"></div>
                    <p className="text-lg md:text-xl font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1609619385002-f40649c82449?w=800&h=600&fit=crop" 
                alt="Kolkata Heritage" 
                className="rounded-lg shadow-2xl max-w-lg w-full grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jury;
