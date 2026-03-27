import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Dilawari Construction
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            A Class Electrical Government Contractor specializing in interior furnishing, civil works, electrical works, and air conditioning for leading PSU organizations across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-60">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Projects", path: "/projects" },
              { label: "Certifications", path: "/certifications" },
              { label: "Contact Us", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="opacity-70 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-60">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-60" />
              <span className="opacity-70">Bairathi Colony, Indore, Madhya Pradesh</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 opacity-60" />
              <a href="tel:+919425053868" className="opacity-70 hover:opacity-100">+91 94250 53868</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 opacity-60" />
              <a href="tel:+919424748455" className="opacity-70 hover:opacity-100">+91 94247 48455</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 opacity-60" />
              <span className="opacity-70">info@dilawariconstruction.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-background/10 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Dilawari Construction. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
