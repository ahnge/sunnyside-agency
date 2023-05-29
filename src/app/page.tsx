import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Transform from "../components/Transform";
import Standout from "@/components/Standout";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="text-lg">
      <Nav />
      <Hero />
      <Transform />
      <Standout />
      <Services />
    </main>
  );
}
