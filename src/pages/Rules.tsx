import Navigation from "@/components/Navigation";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Rules = () => {
  return (
    <div className="min-h-screen">
      <PageNav />
      <Navigation />
      
      {/* Category Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <svg viewBox="0 0 400 400" className="w-96 h-96 text-background">
                <circle cx="200" cy="100" r="60" fill="currentColor" opacity="0.8" />
                <circle cx="200" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="4" />
                <rect x="150" y="160" width="100" height="120" fill="currentColor" opacity="0.8" />
                <polygon points="120,280 200,320 280,280" fill="currentColor" opacity="0.8" />
                <rect x="140" y="200" width="30" height="40" fill="#8B0000" />
                <rect x="230" y="200" width="30" height="40" fill="#8B0000" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-12 tracking-tight">
                Category
              </h1>
              <div className="space-y-6">
                <div className="bg-black/20 border-4 border-black py-4">
                  <div className="text-2xl md:text-3xl font-black uppercase">• Short Film</div>
                </div>
              </div>
              <div className="mt-12">
                <Button variant="secondary" size="lg" className="px-16 py-6 text-2xl">
                  Register Now!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tight">
                Rules
              </h2>
              <ul className="space-y-4 text-base md:text-lg">
                <li>• Short films must be fictional</li>
                <li>• The duration must not exceed 30 minutes</li>
                <li>• All films must be completed between January 1, 2023, and January 31, 2025.</li>
                <li>• Submissions must be a worldwide premiere, meaning they haven't been shown in theaters or released on video, DVD, TV, Internet, or VOD.</li>
                <li>• A preview link of the film, preferably in MP4 format, must be submitted for selection.</li>
                <li>• All non-English films require English subtitles</li>
                <li>• The festival requires films to be available for screening in a minimum of full HD format, up to 4K.</li>
                <li>• A director is not permitted to enter more than one film for selection.</li>
                <li>• The deadline for submitting films, along with the completed entry form and preview link, is March 31, 2025.</li>
                <li>• The best short film award consists of a certificate, which is shared equally between the director and producer, and a golden medal for the director</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1605106702734-205df224ecce?w=800&h=600&fit=crop" 
                alt="Howrah Bridge Kolkata" 
                className="rounded-lg shadow-2xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rules;
