"use client"
import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import "aos/dist/aos.css";
import AOS from "aos"
import { useEffect } from "react";
import Aos from "aos";
export default function Home(){

  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement:"bottom-bottom",
      offset: 160,
    });
    Aos.refresh();
  }, []);
  
 return(
  <main style={{background:'black',color:'white'}}>
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
  </main>
 );
}
