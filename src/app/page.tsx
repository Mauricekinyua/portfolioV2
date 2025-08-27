
import Hero from "@/pages/Hero";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import gsap from "gsap/dist/gsap";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText)
export default function Home() {
  return(
      <main className='flex flex-center flex-col'>
        <Hero/>
        <About/>
          <Projects/>
      </main>


  )

}
