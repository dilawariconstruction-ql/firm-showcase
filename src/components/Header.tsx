import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Certifications", path: "/certifications" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
            DC
          </div>
          <div className="hidden sm:block">
            <p className="text-lg font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Dilawari Construction
            </p>
            <p className="text-xs text-muted-foreground -mt-0.5">A Class Electrical Govt. Contractor</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+919425053868" className="ml-2">
            <Button size="sm" variant="outline" className="gap-2">
              <Phone className="h-3.5 w-3.5" />
              Call Us
            </Button>
          </a>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-2 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+919425053868" className="mt-4">
                <Button className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  +91 94250 53868
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
