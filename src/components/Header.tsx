import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Our Story", path: "/our-story" },
  { label: "Specialty", path: "/specialty" },
  { label: "Contact", path: "/contact" },
  { label: "Beans", path: "/beans" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-coffee-dark text-cream">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="font-display text-2xl font-bold tracking-wide">
          Coffee
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                location.pathname === link.path ? "text-accent" : "text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-cream hover:text-accent transition-colors">
            <Search size={20} />
          </button>
          <button aria-label="Cart" className="text-cream hover:text-accent transition-colors">
            <ShoppingCart size={20} />
          </button>
          <button
            className="md:hidden text-cream"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-coffee-dark border-t border-coffee-medium px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                location.pathname === link.path ? "text-accent" : "text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
