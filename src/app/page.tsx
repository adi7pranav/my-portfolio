import About from "./about/page";
import Achievements from "./achievements/page";
import Experience from "./experience/page";
import HomePage from "./home";
import Projects from "./projects/page";
export default function Home() {
  return (
    <main>
      <HomePage/>
      <Experience />
      <Projects/>
      <Achievements/>
      <About/>
      </main>
  );
}
