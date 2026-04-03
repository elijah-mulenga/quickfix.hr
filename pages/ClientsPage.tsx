import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";

import cultureRadio from "@/assets/client-culture-radio.jpg";
import niruGroup from "@/assets/client-niru-group.jpg";
import ackmen from "@/assets/client-ackmen.png";
import citySpecialist from "@/assets/client-city-specialist.jpg";
import kadem from "@/assets/client-kadem.jpg";
import meconah from "@/assets/client-meconah.jpg";
import foundationLabour from "@/assets/client-foundation-labour.jpg";

const clients = [
  {
    name: "Culture Radio 105.7",
    logo: cultureRadio,
    description: "A Culture of Good Radio",
  },
  {
    name: "Niru Group Limited",
    logo: niruGroup,
    description: "Diversified business group",
  },
  {
    name: "Ackmen Integrated Services Limited",
    logo: ackmen,
    description: "Integrated services provider",
  },
  {
    name: "City Specialist Clinic",
    logo: citySpecialist,
    description: "Restoring Health – Improving Lives",
  },
  {
    name: "Kadem Supercraft and General Dealers",
    logo: kadem,
    description: "Supercraft and general dealing services",
  },
  {
    name: "Meconah Investments",
    logo: meconah,
    description: "Construction and investment solutions",
  },
  {
    name: "Foundation for Labour Relations",
    logo: foundationLabour,
    description: "Labour Revolution until victory",
  },
];

const ClientsPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-16 sm:py-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              Our Clients
            </h1>
            <p className="font-body text-lg opacity-90 max-w-2xl mx-auto">
              Organizations and institutions we have worked with.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Client Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <FadeInSection key={client.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 12px 32px hsl(218 60% 26% / 0.12)" }}
                  className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center h-full"
                >
                  <div className="w-full h-32 flex items-center justify-center mb-4">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-primary text-sm mb-1">
                    {client.name}
                  </h3>
                  <p className="text-xs font-body text-muted-foreground">
                    {client.description}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
