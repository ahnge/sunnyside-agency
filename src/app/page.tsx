import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Transform from "../components/Transform";
import Standout from "@/components/Standout";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-lg">
      <Nav />
      <Hero />
      <Transform />
      <Standout />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </main>
  );
}
