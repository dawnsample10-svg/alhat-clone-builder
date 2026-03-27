import { Link } from "react-router-dom";
import heroCoffee from "@/assets/hero-coffee.jpg";

const HeroSection = () => (
  <section className="relative bg-coffee-dark overflow-hidden">
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 md:py-24">
      <div className="z-10">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight">
          Brewed to<br />
          <span className="italic text-accent">Perfection,</span>
        </h1>
        <p className="mt-4 text-coffee-light text-sm md:text-base leading-relaxed max-w-md">
          Experience the art of coffee making with our premium hand-selected beans, 
          expertly roasted and carefully brewed to deliver an unforgettable taste experience.
        </p>
        <Link
          to="/menu"
          className="mt-8 inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
        >
          ORDER COFFEE
        </Link>
      </div>
      <div className="relative">
        <img
          src={heroCoffee}
          alt="Barista pouring latte art"
          className="rounded-2xl w-full max-w-lg mx-auto shadow-2xl"
          width={800}
          height={900}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
