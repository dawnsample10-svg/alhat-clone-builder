import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-16 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-muted-foreground mb-8">
            We'd love to hear from you! Visit us or send a message below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-foreground">
              <MapPin size={20} className="text-accent shrink-0" />
              <span>123 Coffee Street, Manila, Philippines</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Phone size={20} className="text-accent shrink-0" />
              <span>+63 912 345 6789</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Mail size={20} className="text-accent shrink-0" />
              <span>hello@coffeebean.ph</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Clock size={20} className="text-accent shrink-0" />
              <span>Mon – Sun: 7:00 AM – 10:00 PM</span>
            </div>
          </div>
        </div>

        <form className="bg-card p-8 rounded-xl shadow-md space-y-5">
          <div>
            <label className="text-sm font-semibold block mb-1">Name</label>
            <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-md bg-background border border-border text-sm outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">Email</label>
            <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md bg-background border border-border text-sm outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">Message</label>
            <textarea rows={4} placeholder="Your message" className="w-full px-4 py-3 rounded-md bg-background border border-border text-sm outline-none focus:ring-2 focus:ring-accent resize-none" />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
