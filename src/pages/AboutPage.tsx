import FadeInSection from "@/components/FadeInSection";
import { Target, Eye, Heart, Star, Lightbulb, Clock, Users, TrendingUp } from "lucide-react";
import aboutTeamImg from "@/assets/about-team.jpg";
import consultationImg from "@/assets/consultation.jpg";

const coreValues = [
  { icon: Heart, title: "Integrity", desc: "Ethical conduct, transparency, and accountability" },
  { icon: Star, title: "Professionalism", desc: "High standards of competence and service delivery" },
  { icon: Lightbulb, title: "Innovation", desc: "Practical, forward-looking HR solutions" },
  { icon: Clock, title: "Reliability", desc: "Consistent, dependable, and timely support" },
  { icon: Users, title: "Client-Centricity", desc: "Solutions tailored to client needs" },
  { icon: TrendingUp, title: "Continuous Improvement", desc: "Commitment to learning and excellence" },
];

const team = [
  {
    name: "Albert Mando",
    role: "Director of Administration",
    bio: "A seasoned Human Resource practitioner with over 20 years of experience in HR Administration, institutional governance, labour compliance, and performance management systems. He has extensive expertise in developing and implementing HR policies, strengthening institutional HR frameworks, and aligning human capital strategies with organisational objectives.",
    phone: "+260 977 454 243",
  },
  {
    name: "Wigan Freedom Mumba",
    role: "Director of Operations",
    bio: "A highly experienced HR and Industrial Relations professional with over 35 years of leadership in workforce management, collective bargaining, dispute resolution, and strategic HR advisory. He has played a pivotal role in guiding organisations on labour relations, negotiations, and compliance with employment legislation.",
    phone: "+260 966 259 424",
  },
  {
    name: "Henry Milanzi",
    role: "Director of Finance",
    bio: "A finance and taxation specialist with strong experience in payroll management, statutory compliance, financial controls, and regulatory reporting. With professional experience including service at the Zambia Revenue Authority (ZRA), he brings deep expertise in financial governance, tax compliance, and institutional financial accountability.",
    phone: "+260 968 882 350",
  },
  {
    name: "Stephen Chipala",
    role: "Associate Director",
    bio: "An experienced HR consultant and training facilitator with a strong track record in capacity building and organisational development. Through his work with Future Search, he has delivered pre-retirement trainings in public and private sector for a period spanning seven (7) years. His work focuses on strengthening institutional HR capacity and enhancing compliance with labour and employment standards.",
  },
  {
    name: "Clarissy Mwape",
    role: "Administrative Officer",
    bio: "An HR and Administration professional supporting recruitment processes, records management, payroll coordination, and HR compliance documentation. She plays a key role in ensuring efficient administrative and operational support to consultancy assignments.",
  },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-wide">
          <FadeInSection>
            <p className="text-sm font-body font-semibold tracking-widest uppercase mb-4 opacity-80">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Vision, Mission, and Values Driving Our Practice
            </h1>
            <p className="text-lg font-body opacity-90 max-w-3xl leading-relaxed">
              Quick Fix Labour Solutions is a Zambian-registered HR consultancy dedicated to providing comprehensive human resource solutions tailored to your needs. We focus on both public and private sectors to ensure compliance and effective management of workforce challenges.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Company overview with image */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={aboutTeamImg}
                  alt="Quick Fix Labour Solutions team providing cost-effective HR systems"
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Who We Are</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Quick Fix Labour Solutions Limited is a Zambian-registered Human Resource Consultancy firm, incorporated under the Companies Act No. 10 of 2017. The firm provides comprehensive HR consulting services across both public and private sectors.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We are licensed under the Employment Code Act No. 3 of 2019 as an employment agency, and maintain full compliance with PACRA, ZRA, NAPSA, and WCFCB. Our experienced leadership team combines over 55 years of collective HR expertise.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection>
              <div className="bg-card rounded-lg p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Vision</h2>
                <p className="font-body text-foreground leading-relaxed">
                  To be the leading HR solutions provider in Zambia, recognized for excellence, innovation, and unwavering commitment to client success.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div className="bg-card rounded-lg p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-display font-bold text-primary mb-4">Mission</h2>
                <p className="font-body text-foreground leading-relaxed">
                  To deliver comprehensive, technology-driven and client-focused HR solutions that empower organizations to thrive through optimized workforce management and regulatory compliance.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeInSection>
            <h2 className="text-3xl font-display font-bold text-primary text-center mb-12">Core Values</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-lg p-6 card-lift">
                  <val.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-display font-semibold text-primary mb-2">{val.title}</h3>
                  <p className="text-sm font-body text-muted-foreground">{val.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <FadeInSection>
            <h2 className="text-3xl font-display font-bold text-primary text-center mb-4">Leadership Structure</h2>
            <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Our leadership team combines extensive experience in human resource management, labour relations, financial governance, institutional administration, and compliance advisory across both public and private sector institutions.
            </p>
          </FadeInSection>

          {/* Team image banner */}
          <FadeInSection>
            <div className="rounded-lg overflow-hidden shadow-lg mb-12 max-w-4xl mx-auto">
              <img
                src={consultationImg}
                alt="Quick Fix Labour Solutions leadership team in a professional consultation"
                className="w-full h-64 sm:h-80 object-cover object-center"
              />
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-lg overflow-hidden card-lift">
                  <div className="gradient-navy h-2" />
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4 text-primary font-display font-bold text-xl">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <h3 className="font-display font-bold text-primary text-lg">{member.name}</h3>
                    <p className="text-sm font-body text-accent font-semibold mb-3">{member.role}</p>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{member.bio}</p>
                    {member.phone && (
                      <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="inline-block mt-3 text-sm font-body text-primary font-medium hover:text-accent transition-colors">
                        {member.phone}
                      </a>
                    )}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
