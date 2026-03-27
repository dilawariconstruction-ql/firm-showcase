import { motion } from "framer-motion";
import { ShieldCheck, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const certifications = [
  { org: "State Bank of India (SBI)", type: "Registered Vendor" },
  { org: "Life Insurance Corporation of India (LIC)", type: "Empanelled Contractor" },
  { org: "Bank of Baroda", type: "Approved Vendor" },
  { org: "HDFC Bank", type: "Registered Contractor" },
  { org: "UTI Asset Management Company", type: "Approved Vendor" },
  { org: "National Insurance Company", type: "Empanelled Contractor" },
  { org: "Opus Aditya Birla", type: "Registered Vendor" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const Certifications = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-foreground text-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] opacity-50 mb-2">Trust & Credibility</p>
        <h1 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          Certifications & Registrations
        </h1>
        <p className="mt-4 text-lg opacity-70 max-w-xl">
          Proudly registered as an approved vendor with India's leading public sector and financial institutions.
        </p>
      </div>
    </section>

    {/* Certifications Grid */}
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary mb-2">Vendor Registrations</p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            PSU Organization Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <motion.div
              key={c.org}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base" style={{ fontFamily: "var(--font-heading)" }}>{c.org}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.type}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Work Completion */}
    <section className="py-16 md:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <FileCheck className="h-8 w-8" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Work Completion Certificates
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          We hold numerous work completion certificates from PSU organizations, validating our track record of delivering quality projects on time. Contact us for detailed documentation.
        </p>
      </div>
    </section>
  </Layout>
);

export default Certifications;
