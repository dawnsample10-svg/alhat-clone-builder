import Header from "@/components/Header";
import Footer from "@/components/Footer";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const beans = [
  { name: "Colombian Supremo", origin: "Colombia", roast: "Medium", notes: "Caramel, Nutty, Smooth" },
  { name: "Ethiopian Yirgacheffe", origin: "Ethiopia", roast: "Light", notes: "Fruity, Floral, Bright" },
  { name: "Guatemalan Antigua", origin: "Guatemala", roast: "Dark", notes: "Chocolate, Spicy, Rich" },
  { name: "Brazilian Santos", origin: "Brazil", roast: "Medium", notes: "Sweet, Low Acidity, Creamy" },
  { name: "Sumatra Mandheling", origin: "Indonesia", roast: "Dark", notes: "Earthy, Herbal, Full Body" },
  { name: "Costa Rica Tarrazú", origin: "Costa Rica", roast: "Medium", notes: "Citrus, Honey, Clean" },
];

const BeansPage = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-16 bg-background">
      <div className="container">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">Our Coffee Beans</h1>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Sourced from the world's finest coffee-growing regions. Available for purchase in-store and online.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beans.map((bean) => (
            <div key={bean.name} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={coffeeBeans} alt={bean.name} loading="lazy" width={512} height={512} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{bean.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">Origin: {bean.origin} · Roast: {bean.roast}</p>
                <p className="text-sm text-accent font-medium mt-2">{bean.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default BeansPage;
