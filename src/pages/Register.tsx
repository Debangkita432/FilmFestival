import Navigation from "@/components/Navigation";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="min-h-screen">
      <PageNav />
      <Navigation />
      
      <section className="bg-primary text-primary-foreground py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-black uppercase mb-12 text-center tracking-tight">
            Register to Showcase Your Content
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-black uppercase mb-2 tracking-wide">
                  Title of Project
                </label>
                <Input className="bg-transparent border-2 border-background text-primary-foreground" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black uppercase mb-2 tracking-wide">
                    Duration of Project
                  </label>
                  <div className="flex gap-2">
                    <Input className="bg-transparent border-2 border-background text-primary-foreground w-16" placeholder="HH" />
                    <Input className="bg-transparent border-2 border-background text-primary-foreground w-16" placeholder="MM" />
                    <Input className="bg-transparent border-2 border-background text-primary-foreground w-16" placeholder="SS" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-black uppercase mb-2 tracking-wide">
                    Project Production Date
                  </label>
                  <Input type="date" className="bg-transparent border-2 border-background text-primary-foreground" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2 tracking-wide">
                  Trailer (upto 1 min) - Video Link / All Access Google Drive
                </label>
                <Input className="bg-transparent border-2 border-background text-primary-foreground" />
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2 tracking-wide">
                  Full Film in MP4 (Vimeo Link with Password / All Access Google Drive Link)
                </label>
                <Input className="bg-transparent border-2 border-background text-primary-foreground" />
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2 tracking-wide">
                  Cast Details
                </label>
                <Input className="bg-transparent border-2 border-background text-primary-foreground" />
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2 tracking-wide">
                  Producer Details
                </label>
                <Input className="bg-transparent border-2 border-background text-primary-foreground" />
              </div>

              <div>
                <label className="block text-sm font-black uppercase mb-2 tracking-wide">
                  Director's Byte (Max 500 Words)
                </label>
                <Textarea className="bg-transparent border-2 border-background text-primary-foreground min-h-32" />
              </div>

              <div className="text-center pt-4">
                <Button variant="secondary" size="lg" className="px-16 py-6 text-xl">
                  Register Now
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <svg viewBox="0 0 300 300" className="w-96 h-96">
                  <path d="M 50 150 Q 150 50, 250 150 Q 150 250, 50 150" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="8" 
                        className="text-background/40" />
                  <circle cx="50" cy="150" r="15" fill="currentColor" className="text-background/60" />
                  <circle cx="250" cy="150" r="15" fill="currentColor" className="text-background/60" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
