import { Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tight">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <div className="text-sm">
                  <p className="font-bold">cfccosmartsciety.org</p>
                  <p className="font-bold">sanghamitraicm.edu.in</p>
                  <p className="font-bold">malav.gangulyeiem.edu.in</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5" />
                <p className="font-bold text-sm">cfccosmartsciety.org</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="inline-block">
              <div className="bg-background text-primary px-8 py-4 rounded-lg border-4 border-primary shadow-xl">
                <div className="text-xl md:text-2xl font-black uppercase tracking-wide">
                  Our Venue
                </div>
                <div className="text-2xl md:text-3xl font-black uppercase tracking-wider">
                  Nandan
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-48 bg-accent/30 rounded-lg border-4 border-accent/50 flex items-center justify-center">
              <div className="text-center">
                <p className="font-black text-sm">MAP LOCATION</p>
                <p className="text-xs mt-2">Nandan, Kolkata</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-background/20 flex justify-between items-center text-xs">
          <p>Terms & Support</p>
          <p>Designed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
