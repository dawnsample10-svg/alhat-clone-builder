import { Coffee } from "lucide-react";

const PromoBanner = () => (
  <section className="bg-warm-beige py-4">
    <div className="container flex flex-col sm:flex-row items-center justify-center gap-4">
      <div className="flex items-center gap-3 bg-accent text-accent-foreground px-6 py-3 rounded-full">
        <Coffee size={24} />
        <span className="font-display text-lg font-bold">Get 1 Free Croissant Today On!</span>
      </div>
    </div>
  </section>
);

export default PromoBanner;
