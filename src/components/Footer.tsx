import { Link } from "react-router-dom";
import { Coffee, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-coffee-dark text-cream">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-display text-xl font-bold mb-4">Coffee Bean</h3>
        <p className="text-sm text-coffee-light leading-relaxed">
          Experience the finest artisan coffee brewed with passion and precision. Every cup tells a story.
        </p>
        <div className="flex gap-3 mt-4">
          <a href="#" className="text-coffee-light hover:text-accent transition-colors"><Facebook size={18} /></a>
          <a href="#" className="text-coffee-light hover:text-accent transition-colors"><Instagram size={18} /></a>
          <a href="#" className="text-coffee-light hover:text-accent transition-colors"><Twitter size={18} /></a>
        </div>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Customers</h4>
        <ul className="space-y-2 text-sm text-coffee-light">
          <li><Link to="/menu" className="hover:text-accent transition-colors">Our Menu</Link></li>
          <li><Link to="/beans" className="hover:text-accent transition-colors">Coffee Beans</Link></li>
          <li><Link to="/specialty" className="hover:text-accent transition-colors">Specialty</Link></li>
          <li><a href="#" className="hover:text-accent transition-colors">Gift Cards</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Testimonials</h4>
        <p className="text-sm text-coffee-light italic leading-relaxed">
          "The best coffee I've ever had. Their espresso is absolutely divine!" — Maria S.
        </p>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Newsletter</h4>
        <p className="text-sm text-coffee-light mb-3">Subscribe for updates & offers.</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-3 py-2 text-sm bg-coffee-medium text-cream placeholder:text-coffee-light rounded-l-md border-none outline-none"
          />
          <button className="px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-r-md hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <div className="border-t border-coffee-medium text-center py-4 text-xs text-coffee-light">
      © 2026 Coffee Bean. All rights reserved.
    </div>
  </footer>
);

export default Footer;
