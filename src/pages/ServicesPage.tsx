import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";
import { Users, Briefcase, ClipboardCheck, FileText, BarChart3, GraduationCap, Building2, Star, RefreshCw, Shield, Heart, Compass, DollarSign, UserCheck } from "lucide-react";
import servicesOverview from "@/assets/services-overview.jpg";

const services = [
  {
    icon: Users,
    title: "Recruitment and Selection",
    desc: "We assist in finding the right talent that fits your organizational needs.",
  },
  {
    icon: Briefcase,
    title: "Labour Hire Solutions",
    desc: "Our flexible labour hire solutions provide skilled personnel for various project demands.",
  },
  {
    icon: ClipboardCheck,
    title: "Human Resource Audits",
    desc: "We check if HR practices are on point and compliant with laws, policies, and best practices.",
  },
  {
    icon: FileText,
    title: "HR Policy Development",
    desc: "Our service helps you create clear, compliant, and effective policies that support your business goals and people. We'll work with you to craft policies that are fair, consistent, and communicate your culture.",
  },
  {
    icon: BarChart3,
    title: "Performance Management",
    desc: "We help implement effective performance management systems that drive employee engagement and accountability.",
  },
  {
    icon: GraduationCap,
    title: "Training and Capacity Building",
    desc: "Tailored training programs are designed to enhance skills and foster professional growth.",
  },
  {
    icon: Building2,
    title: "Organisational Development",
    desc: "Our Organisational Development service helps you boost performance, adaptability, and growth through tailored interventions that enhance culture, processes, and leadership. We'll work with you to diagnose challenges and implement solutions that drive sustainable success.",
  },
  {
    icon: Star,
    title: "Talent Management",
    desc: "Our Talent Management service helps you attract, develop, and retain top performers who drive business success. We'll partner with you to build strategies that identify, grow, and keep your best people.",
  },
  {
    icon: RefreshCw,
    title: "Change Management",
    desc: "Our Change Management service guides you through transitions smoothly, minimizing disruption and maximizing buy-in from your team. We'll help you craft a tailored approach to lead change, communicate effectively, and embed new ways of working.",
  },
  {
    icon: Shield,
    title: "Workplace Health, Safety & Compliance",
    desc: "Our service helps you create a safe, healthy, and supportive work environment that boosts productivity and employee well-being. From risk assessments to wellness programs, we've got your back.",
  },
  {
    icon: Heart,
    title: "Employee Engagement & Retention",
    desc: "Our service helps you understand what drives your people and craft strategies to keep them motivated, committed, and here to stay.",
  },
  {
    icon: Compass,
    title: "Human Resource Planning",
    desc: "We figure out what talent an organisation needs now and in the future, and how to get it.",
  },
  {
    icon: UserCheck,
    title: "Leadership and Development",
    desc: "We groom people to lead effectively – think skills, mindset, and influence through a mix of learning, practice, and growth to step up and inspire teams.",
  },
  {
    icon: DollarSign,
    title: "Compensation & Benefits Management",
    desc: "We design and manage pay structures, perks, and benefits to attract, motivate, and retain talent.",
  },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-wide">
          <FadeInSection>
            <p className="text-sm font-body font-semibold tracking-widest uppercase mb-4 opacity-80">Our Services</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Comprehensive HR Consulting Services
            </h1>
            <p className="text-lg font-body opacity-90 max-w-3xl leading-relaxed">
              We specialize in a broad range of services to support your workforce. From recruitment and selection to performance management and training, our experienced consultants are dedicated to enhancing your HR capabilities, ultimately fostering a culture of growth and excellence across your organization.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Services overview visual */}
      <section className="bg-secondary py-12">
        <div className="container-wide">
          <FadeInSection>
            <div className="rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto">
              <img
                src={servicesOverview}
                alt="Quick Fix Labour Solutions full range of HR services including recruitment, labour hire, training, compliance and more"
                className="w-full h-auto"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 16px 40px hsl(218 60% 26% / 0.12)" }}
                  className="bg-card border border-border rounded-lg p-6 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-primary text-lg mb-3">{service.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
