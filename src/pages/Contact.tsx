import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] opacity-50 mb-2">Reach Out</p>
          <h1 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Contact Us
          </h1>
          <p className="mt-4 text-lg opacity-70 max-w-xl">
            Have a project in mind? Get in touch and let's discuss how we can help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-semibold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your name" required maxLength={100} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required maxLength={15} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required maxLength={255} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your project..." rows={5} required maxLength={1000} />
                    </div>
                    <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
                      <Send className="h-4 w-4" />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-xl font-semibold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Get In Touch
                </h2>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">Office Address</p>
                  <p className="text-sm text-muted-foreground mt-1">Bairathi Colony, Indore,<br />Madhya Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <a href="tel:+919425053868" className="hover:text-primary transition-colors">+91 94250 53868</a><br />
                    <a href="tel:+919424748455" className="hover:text-primary transition-colors">+91 94247 48455</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-sm text-muted-foreground mt-1">info@dilawariconstruction.com</p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 h-48 rounded-lg bg-muted flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Map — Bairathi Colony, Indore</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
