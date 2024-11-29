import About from "@/components/About";
import Experiance from "@/components/Skills";
import Footerd from "@/components/Footerd";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortFolio from "@/components/PortFolio";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
    <Toaster />
      <div>
        <Header />
        <Hero />
        <About />
        <PortFolio />
        <Experiance />
        <Footerd />
      </div>
    </>
  );
}
