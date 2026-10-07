import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
        <div className="max-w-6xl mx-auto flex flex-col ">   
          <Hero />
          <About />
          <Services />
          <Process />
          <Contact />
        </div>
    </main>
  )
}
