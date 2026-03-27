import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroCoffee from "@/assets/hero-coffee.jpg";

const OurStory = () => (
  <div className="min-h-screen">
    <Header />
    <section className="py-16 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in 2015, Coffee Bean started as a small passion project by two friends who shared an unwavering 
            love for exceptional coffee. What began as a tiny corner shop has grown into a beloved community gathering place.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We source our beans directly from sustainable farms across Colombia, Ethiopia, and Guatemala. 
            Every batch is carefully roasted in-house to bring out the unique flavor profiles of each origin.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is simple: to serve the perfect cup of coffee while creating a warm, welcoming space 
            where people can connect, create, and find inspiration.
          </p>
        </div>
        <img src={heroCoffee} alt="Our coffee story" className="rounded-2xl shadow-xl w-full" width={800} height={900} />
      </div>
    </section>
    <Footer />
  </div>
);

export default OurStory;
