import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";

export default function Home() {
  return (
    <main>
        <div className="max-w-6xl mx-auto flex flex-col ">   
          <Hero />
          <About />
          <Services />
          <Process />
        </div>
    </main>
  )
}
