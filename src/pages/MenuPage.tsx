import Header from "@/components/Header";
import Footer from "@/components/Footer";
import espresso from "@/assets/espresso.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import latte from "@/assets/latte.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const menuItems = [
  { name: "Classic Espresso", price: "₱120", category: "Hot", image: espresso },
  { name: "Iced Caramel Latte", price: "₱180", category: "Iced", image: icedCoffee },
  { name: "Vanilla Latte", price: "₱160", category: "Hot", image: latte },
  { name: "Cold Brew", price: "₱150", category: "Iced", image: icedCoffee },
  { name: "Cappuccino", price: "₱140", category: "Hot", image: espresso },
  { name: "Mocha Frappe", price: "₱190", category: "Iced", image: latte },
  { name: "Americano", price: "₱110", category: "Hot", image: espresso },
  { name: "Matcha Latte", price: "₱170", category: "Hot", image: latte },
];

const MenuPage = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-16 bg-background">
      <div className="container">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">Our Menu</h1>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Discover our selection of handcrafted coffee beverages made with premium beans.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={item.image} alt={item.name} loading="lazy" width={512} height={512} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs font-semibold text-accent uppercase">{item.category}</span>
                <h3 className="font-display text-lg font-bold mt-1">{item.name}</h3>
                <p className="text-primary font-bold mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default MenuPage;
