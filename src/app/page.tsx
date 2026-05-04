"use client";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footerd";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/PortFolio";
import Skills from "@/components/Skills";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Skills />
          <Experience />
        </main>
        <Footer />
      </div>
    </>
  );
}