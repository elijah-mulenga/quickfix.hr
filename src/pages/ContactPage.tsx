import { useState, FormEvent } from "react";
import FadeInSection from "@/components/FadeInSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import consultationImg from "@/assets/consultation.jpg";

const contacts = [
  { name: "Albert Mando", phone: "+260 977 454 243" },
  { name: "Wigan Mumba", phone: "+260 966 259 424" },
  { name: "Henry Milanzi", phone: "+260 968 882 350" },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`);
    window.location.href = `mailto:quickfixlabour@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening email client", description: "Your inquiry is being prepared." });
  };

  return (
    <div>
      {/* Hero with image */}
      <section className="gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 sm:py-24 px-4 sm:px-6">
          <FadeInSection>
            <p className="text-sm font-body font-semibold tracking-widest uppercase mb-4 opacity-80">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">Get In Touch</h1>
            <p className="text-lg font-body opacity-90 max-w-xl leading-relaxed">
              We're here to help you with all your HR needs. Reach out to us via phone, email, or fill out the contact form below.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <div className="hidden lg:block rounded-lg overflow-hidden shadow-2xl">
              <img
                src={consultationImg}
                alt="Professional consultation at Quick Fix Labour Solutions"
                className="w-full h-72 object-cover object-center"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <FadeInSection>
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-6">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  <a href="mailto:quickfixlabour@gmail.com" className="flex items-center gap-4 font-body text-foreground hover:text-accent transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">quickfixlabour@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 font-body text-foreground">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">75 Nchanga South, Chingola, Copperbelt Province, Zambia</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-display font-semibold text-primary mb-4">Directors</h3>
                <div className="space-y-3">
                  {contacts.map((c) => (
                    <a
                      key={c.name}
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 font-body text-foreground hover:text-accent transition-colors"
                    >
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{c.name}:</span>
                      <span>{c.phone}</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Form */}
            <FadeInSection delay={0.1}>
              <form onSubmit={handleSubmit} className="bg-secondary rounded-lg p-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-6">Send Us a Message</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-body font-semibold hover:bg-navy-light transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </button>
                </div>
              </form>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
