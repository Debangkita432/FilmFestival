import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="IEM Film Fest Logo" className="h-16 w-16" />
            <div className="flex flex-col">
              <h2 className="text-sm md:text-base font-bold uppercase tracking-tight leading-tight">
                Consortium of Film and Content
              </h2>
              <h2 className="text-sm md:text-base font-bold uppercase tracking-tight leading-tight">
                Creators Festival Kolkata Chapter
              </h2>
            </div>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/about" className="font-bold uppercase text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/rules" className="font-bold uppercase text-sm hover:text-primary transition-colors">
              Rules
            </Link>
            <Link to="/jury" className="font-bold uppercase text-sm hover:text-primary transition-colors">
              Jury
            </Link>
            <Link to="/register">
              <Button variant="secondary" size="lg" className="ml-4">
                Register Now
              </Button>
            </Link>
            <a href="#contact" className="font-bold uppercase text-sm hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
