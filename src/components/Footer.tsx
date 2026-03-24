import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Fix Labour Solutions</h3>
            <p className="text-sm opacity-80 leading-relaxed font-body">
              A Zambian-registered HR consultancy dedicated to providing comprehensive human resource solutions. Licensed Employment Agency No. EAG-0014-2026.
            </p>
            <p className="text-xs opacity-60 mt-4 font-body">
              Company Registration: 120251025612
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Compliance", path: "/compliance" },
                { label: "Industries", path: "/industries" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 font-body text-sm">
              {["Recruitment & Selection", "Labour Hire Solutions", "HR Audits & Compliance", "Training & Development", "Performance Management"].map((s) => (
                <li key={s} className="opacity-80">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 font-body text-sm">
              <a href="mailto:quickfixlabour@gmail.com" className="flex items-center gap-2 opacity-80 hover:opacity-100">
                <Mail className="w-4 h-4 shrink-0" />
                quickfixlabour@gmail.com
              </a>
              <a href="tel:+260977454243" className="flex items-center gap-2 opacity-80 hover:opacity-100">
                <Phone className="w-4 h-4 shrink-0" />
                +260 977 454 243
              </a>
              <div className="flex items-start gap-2 opacity-80">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>75 Nchanga South, Chingola, Copperbelt Province, Zambia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-xs opacity-60 font-body">
            © {new Date().getFullYear()} Quick Fix Labour Solutions Limited. All rights reserved. Compliant with the Employment Code Act No. 3 of 2019 and all applicable Zambian labour regulations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
