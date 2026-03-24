import { Link } from "react-router-dom";
import { Users, Briefcase, ShieldCheck, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import consultationImg from "@/assets/consultation.jpg";
import servicesOverview from "@/assets/services-overview.jpg";

const services = [
  { icon: Users, title: "Recruitment", desc: "We assist in finding the right talent that fits your organizational needs." },
  { icon: Briefcase, title: "Labour Hire", desc: "Our flexible labour hire solutions provide skilled personnel for various project demands." },
  { icon: ShieldCheck, title: "HR Compliance", desc: "We ensure strict adherence to employment regulations and the Employment Code Act." },
  { icon: GraduationCap, title: "Training & Development", desc: "Tailored training programs designed to enhance skills and foster professional growth." },
];

const highlights = [
  "Zambian Focus – Deeply rooted in Zambia, understanding local needs",
  "Compliance-Driven – Strict adherence to employment regulations",
  "Sector Expertise – Serving clients across diverse sectors",
  "Comprehensive Solutions – Full range of HR advisory services",
];

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 sm:py-24 px-4 sm:px-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-body font-semibold tracking-widest uppercase mb-4 opacity-80"
            >
              Human Resource Consultancy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              Your success is our business.{" "}
              <span className="text-red-brand-light">Let's build it together.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-body opacity-90 mb-8 max-w-2xl leading-relaxed"
            >
              Quick Fix Labour Solutions is a Zambian-registered HR consultancy delivering comprehensive, technology-driven and client-focused HR solutions that empower organizations to thrive.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-md font-body font-semibold hover:bg-red-brand-light transition-colors"
              >
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/260977454243?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20HR%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-md font-body font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Contact via WhatsApp
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={heroImage}
              alt="Quick Fix Labour Solutions — HR professionals collaborating"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <FadeInSection>
            <h2 className="text-3xl font-display font-bold text-primary text-center mb-12">Your Trusted HR Partner</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => {
              const [title, desc] = item.split(" – ");
              return (
                <FadeInSection key={i} delay={i * 0.1}>
                  <div className="bg-card rounded-lg p-6 card-lift">
                    <CheckCircle className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-display font-semibold text-primary mb-2">{title}</h3>
                    <p className="text-sm font-body text-muted-foreground">{desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services with visual */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Core Services</h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions for effective human resource management and compliance.
              </p>
            </div>
          </FadeInSection>

          {/* Services overview image */}
          <FadeInSection>
            <div className="rounded-lg overflow-hidden shadow-lg mb-12 max-w-4xl mx-auto">
              <img
                src={servicesOverview}
                alt="Overview of Quick Fix Labour Solutions HR services including recruitment, compliance, training, and more"
                className="w-full h-auto"
              />
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 16px 40px hsl(218 60% 26% / 0.12)" }}
                  className="bg-card border border-border rounded-lg p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm font-body text-muted-foreground">{service.desc}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={0.4}>
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-accent font-body font-semibold hover:gap-3 transition-all"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Consultation CTA with image */}
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={consultationImg}
                  alt="Professional HR consultation meeting at Quick Fix Labour Solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <h2 className="text-3xl font-display font-bold mb-4">
                Delivering Compliance-Driven HR Solutions
              </h2>
              <p className="font-body opacity-90 max-w-2xl mb-8">
                At Quick Fix Labour Solutions, we provide cost-effective HR systems that enhance productivity and compliance, ensuring our clients operate in a risk-free environment while achieving their business goals.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-md font-body font-semibold hover:bg-red-brand-light transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
