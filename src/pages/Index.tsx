import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Zap, Wind, Paintbrush, Users, Award, ThumbsUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const services = [
  { icon: Paintbrush, title: "Interior Furnishing", desc: "Complete interior design and furnishing solutions for corporate and government offices." },
  { icon: Building2, title: "Civil Works", desc: "Construction, renovation, and structural works with precision and quality assurance." },
  { icon: Zap, title: "Electrical Works", desc: "A-Class electrical contracting including installations, maintenance, and upgrades." },
  { icon: Wind, title: "Air Conditioning", desc: "HVAC installation and servicing for commercial and institutional buildings." },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "7+", label: "PSU Certifications" },
  { value: "100%", label: "Client Satisfaction" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-primary/30 text-background">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
              Established Indore
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Building Trust,<br />
              <span className="text-primary" style={{ color: "hsl(0 72% 55%)" }}>Powering Progress</span>
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-8 max-w-lg leading-relaxed">
              A Class Electrical Government Contractor delivering excellence in civil, electrical, and interior works for India's premier PSU organizations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg" className="gap-2 text-base">
                  Get In Touch <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="text-base border-background/30 text-background hover:bg-background/10">
                  View Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <p className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>{s.value}</p>
                <p className="text-sm opacity-80 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50 group">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-2">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Why Choose Dilawari Construction</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Skilled Team", desc: "Our experienced engineers and technicians ensure every project meets the highest standards of quality and safety." },
              { icon: ThumbsUp, title: "Customer Satisfaction", desc: "We pride ourselves on delivering projects on time and within budget, earning trust of India's top PSU organizations." },
              { icon: Award, title: "Certified Vendor", desc: "Registered vendor with SBI, LIC, Bank of Baroda, HDFC Bank, and other premier financial institutions." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Get in touch with us to discuss your requirements. We're here to help bring your vision to life.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2 text-base">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
