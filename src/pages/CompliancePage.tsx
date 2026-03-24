import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";
import { Download, ZoomIn, X } from "lucide-react";
import certPacra from "@/assets/cert-pacra.jpg";
import certZra from "@/assets/cert-zra.jpg";
import certNapsa from "@/assets/cert-napsa.jpg";
import certWcfcb from "@/assets/cert-wcfcb.jpg";
import certLicence from "@/assets/cert-licence.jpg";
import logoNapsa from "@/assets/logo-napsa.jpg";
import logoWcfcb from "@/assets/logo-wcfcb.jpg";

const certificates = [
  {
    title: "PACRA Certificate of Incorporation",
    desc: "Company Registration No. 120251025612 — Incorporated as a Private Company Limited by Shares on 15th May 2025.",
    image: certPacra,
  },
  {
    title: "ZRA Tax Clearance Certificate",
    desc: "TPIN: 2003863534 — Tax Clearance issued by Zambia Revenue Authority, valid up to 31/12/2026.",
    image: certZra,
  },
  {
    title: "NAPSA Compliance Certificate",
    desc: "Employer Account Number: 6668242 — Issued by the National Pension Scheme Authority.",
    image: certNapsa,
  },
  {
    title: "Workers Compensation Fund Compliance Certificate",
    desc: "Employer Account Number: 0005008656/1701 — Compliant with the Workers' Compensation Act No. 10 of 1999.",
    image: certWcfcb,
  },
  {
    title: "Employment Agency Licence",
    desc: "Licence No. EAG-0014-2026 — Licensed to operate under the Employment Code Act No. 3 of 2019, valid until 9th February 2029.",
    image: certLicence,
  },
];

const complianceStandards = [
  { title: "Employment Code", desc: "Our consultancy strictly follows the Employment Code Act to protect employee rights.", logo: null },
  { title: "ZRA Compliance", desc: "We ensure adherence to Zambian Revenue Authority requirements for tax obligations.", logo: null },
  { title: "NAPSA Compliance", desc: "We guide our clients in adhering to the National Pension Scheme Authority regulations.", logo: logoNapsa },
  { title: "WCFCB Standards", desc: "We uphold the standards set by the Workers Compensation Fund Control Board for safety.", logo: logoWcfcb },
];

const CompliancePage = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <div>
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-primary-foreground hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg bg-background"
            />
            <div className="mt-3 flex items-center justify-between">
              <p className="text-primary-foreground font-display font-semibold">{lightboxImage.title}</p>
              <a
                href={lightboxImage.src}
                download={lightboxImage.title.replace(/\s/g, "_") + ".jpg"}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md font-body text-sm font-semibold hover:bg-red-brand-light transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-wide">
          <FadeInSection>
            <p className="text-sm font-body font-semibold tracking-widest uppercase mb-4 opacity-80">Compliance & Certifications</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Ensuring Adherence to Zambian Laws and Ethical Practices
            </h1>
            <p className="text-lg font-body opacity-90 max-w-3xl leading-relaxed">
              Our commitment to compliance ensures that we uphold the highest standards of ethical practice while adhering to Zambian regulations. This focus fosters trust and accountability in our HR solutions, positioning us as a reliable partner in the industry.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Compliance Standards with logos */}
      <section className="bg-secondary section-padding">
        <div className="container-wide">
          <FadeInSection>
            <h2 className="text-3xl font-display font-bold text-primary text-center mb-4">Ethical Excellence</h2>
            <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              By continuously monitoring changes in legislation, such as the Employment Code Act and various statutory requirements, we ensure that our clients remain compliant with all necessary standards.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((item, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-6 card-lift h-full flex flex-col items-center text-center">
                  {item.logo && (
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-secondary flex items-center justify-center mb-4">
                      <img src={item.logo} alt={item.title} className="w-full h-full object-contain p-1" />
                    </div>
                  )}
                  <h3 className="font-display font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm font-body text-muted-foreground">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Gallery */}
      <section className="section-padding">
        <div className="container-wide">
          <FadeInSection>
            <h2 className="text-3xl font-display font-bold text-primary text-center mb-4">Our Certifications</h2>
            <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Click on any certificate to view full-size. All documents can be downloaded for your records.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-card border border-border rounded-lg overflow-hidden card-lift cursor-pointer group"
                  onClick={() => setLightboxImage({ src: cert.image, title: cert.title })}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-secondary relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain p-2"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-10 h-10 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-primary mb-2">{cert.title}</h3>
                    <p className="text-sm font-body text-muted-foreground mb-3">{cert.desc}</p>
                    <div className="flex items-center gap-4">
                      <button className="inline-flex items-center gap-1.5 text-sm font-body text-accent font-semibold hover:text-red-brand-light transition-colors">
                        <ZoomIn className="w-4 h-4" />
                        View Full Size
                      </button>
                      <a
                        href={cert.image}
                        download={cert.title.replace(/\s/g, "_") + ".jpg"}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm font-body text-primary font-semibold hover:text-accent transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;
