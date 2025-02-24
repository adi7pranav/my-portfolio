import About from "./about/page";
import Achievements from "./achievements/page";
import Experience from "./experience/page";
import HomePage from "./home";
import Projects from "./projects/page";
export default function Home() {
  return (
    <main className="scrollbar-hide">
      <HomePage/>
      <div className="min-h-screen">
        <Experience />
      </div>
      <Projects/>
      <Achievements/>
      <About/>
      </main>
  );
}
