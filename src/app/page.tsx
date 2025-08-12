import Image from "next/image";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Navbar from "@/components/navbar";
import Projects from "@/pages/Projects";

export default function Home() {
  return(
      <main className='flex flex-center flex-col'>
        <Hero/>
        <About/>
          <Projects/>
      </main>


  )

}
