import { Link } from "react-router-dom";
import croissantPromo from "@/assets/croissant-promo.jpg";

const CtaBanner = () => (
  <section className="relative overflow-hidden">
    <img
      src={croissantPromo}
      alt="Croissant with coffee"
      loading="lazy"
      width={1200}
      height={512}
      className="w-full h-64 md:h-80 object-cover"
    />
    <div className="absolute inset-0 bg-coffee-dark/70 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-cream">
            Get 1 Croissant with any coffee ☕ <span className="italic text-accent">Today</span>
          </h2>
          <p className="text-coffee-light text-sm mt-2 max-w-lg">
            Buy any handcrafted coffee drink and receive a fresh, buttery croissant on the house. Limited time offer!
          </p>
        </div>
        <Link
          to="/menu"
          className="shrink-0 bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
        >
          ORDER COFFEE
        </Link>
      </div>
    </div>
  </section>
);

export default CtaBanner;
