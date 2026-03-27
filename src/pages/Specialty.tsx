import Header from "@/components/Header";
import Footer from "@/components/Footer";
import espresso from "@/assets/espresso.jpg";
import latte from "@/assets/latte.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";

const specialties = [
  {
    name: "Signature Pour Over",
    description: "Hand-poured single origin coffee, brewed to perfection with precise temperature control for the cleanest flavor extraction.",
    image: espresso,
  },
  {
    name: "Honey Lavender Latte",
    description: "Our house-made lavender syrup blended with local honey and silky steamed milk over a double espresso shot.",
    image: latte,
  },
  {
    name: "Vietnamese Iced Coffee",
    description: "Strong dark roast brewed with a traditional phin filter, sweetened with condensed milk, served over ice.",
    image: icedCoffee,
  },
];

const Specialty = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-16 bg-background">
      <div className="container">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">Our Specialties</h1>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Unique creations crafted exclusively by our master baristas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item) => (
            <div key={item.name} className="bg-card rounded-xl overflow-hidden shadow-md">
              <img src={item.image} alt={item.name} loading="lazy" width={512} height={512} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Specialty;
