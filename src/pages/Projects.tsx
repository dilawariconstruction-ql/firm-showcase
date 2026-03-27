import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const categories = ["All", "Electrical", "Civil", "Interior", "HVAC"];

const projects = [
  { title: "SBI Regional Office Renovation", category: "Interior", location: "Indore", desc: "Complete interior furnishing of the SBI regional headquarters." },
  { title: "LIC Branch Electrical Upgrade", category: "Electrical", location: "Bhopal", desc: "Full electrical rewiring and panel installation for LIC branch office." },
  { title: "Bank of Baroda New Branch", category: "Civil", location: "Indore", desc: "Civil construction of new Bank of Baroda branch premises." },
  { title: "HDFC Bank HVAC Installation", category: "HVAC", location: "Ujjain", desc: "Central air conditioning system for HDFC Bank regional center." },
  { title: "National Insurance Office Interiors", category: "Interior", location: "Indore", desc: "Modern workspace design and furnishing for National Insurance Co." },
  { title: "UTI AMC Building Electrical", category: "Electrical", location: "Indore", desc: "Complete electrical infrastructure for UTI Asset Management office." },
  { title: "SBI Staff Quarters Civil Works", category: "Civil", location: "Dewas", desc: "Residential civil construction for SBI staff housing complex." },
  { title: "Aditya Birla Office AC System", category: "HVAC", location: "Indore", desc: "Split and centralized AC installation for corporate office." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] opacity-50 mb-2">Portfolio</p>
          <h1 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Our Projects
          </h1>
          <p className="mt-4 text-lg opacity-70 max-w-xl">
            A selection of completed works for leading PSU organizations across Madhya Pradesh.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <Button
                key={c}
                size="sm"
                variant={filter === c ? "default" : "outline"}
                onClick={() => setFilter(c)}
              >
                {c}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-muted flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground/20" style={{ fontFamily: "var(--font-heading)" }}>
                      {p.category}
                    </span>
                  </div>
                  <CardContent className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                    <h3 className="text-lg font-semibold mt-1 mb-1" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{p.location}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
