import { Link } from "react-router-dom";
import espresso from "@/assets/espresso.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import latte from "@/assets/latte.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const drinks = [
  {
    title: "Espresso Masterpieces",
    description: "Rich and bold espresso shots crafted with precision. Experience the pure essence of our premium roasted beans.",
    image: espresso,
  },
  {
    title: "Iced Favorites",
    description: "Cool down with our refreshing iced coffee creations. Perfect blend of smooth coffee and creamy textures.",
    image: icedCoffee,
  },
  {
    title: "Coffee Favorites",
    description: "Our most loved classic coffee drinks that keep you coming back. Timeless recipes with modern twists.",
    image: latte,
  },
  {
    title: "Organic Beans",
    description: "Sustainably sourced organic coffee beans from the finest farms around the world. Pure quality in every sip.",
    image: coffeeBeans,
  },
];

const FeaturedDrinks = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
        Featured Drinks
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
        Explore our carefully curated selection of handcrafted beverages. Each drink is made with the finest ingredients 
        and prepared by our skilled baristas to ensure every sip is a memorable experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {drinks.map((drink) => (
          <div key={drink.title} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
            <div className="overflow-hidden">
              <img
                src={drink.image}
                alt={drink.title}
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold mb-2">{drink.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">{drink.description}</p>
              <Link
                to="/menu"
                className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
              >
                READ MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedDrinks;
