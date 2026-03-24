import FadeInSection from "@/components/FadeInSection";
import { Pickaxe, Factory, Stethoscope } from "lucide-react";
import industriesImg from "@/assets/industries.jpg";

const industries = [
  {
    icon: Pickaxe,
    title: "Mining",
    desc: "We provide tailored HR solutions for the mining sector, addressing workforce management, safety compliance, and labour relations unique to this demanding industry.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Our HR consultancy supports manufacturing organisations with recruitment, performance management, and compliance frameworks to maintain operational excellence.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "We serve the healthcare sector with specialised recruitment, training, and HR compliance solutions that ensure quality patient care and workforce well-being.",
  },
];

const IndustriesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-wide">
          <FadeInSection>
            <p className="text-sm font-body font-semibold tracking-widest uppercase mb-4 opacity-80">Industries We Serve</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Diverse Industry Experience in HR Consulting
            </h1>
            <p className="text-lg font-body opacity-90 max-w-3xl leading-relaxed">
              QuickFix Labour Solutions boasts extensive expertise across multiple sectors, including mining, manufacturing, and healthcare, ensuring tailored HR solutions that meet the unique needs of each industry.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-lg p-8 card-lift h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                    <ind.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">{ind.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{ind.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image from PDF */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <FadeInSection>
            <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
              <img
                src={industriesImg}
                alt="Quick Fix Labour Solutions serves Mining, Manufacturing, Healthcare and more industries"
                className="w-full h-auto"
              />
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
