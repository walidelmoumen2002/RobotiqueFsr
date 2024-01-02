import { useEffect } from "react";
import "./css/style.css";
import Hero from "@components/hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "@components/ui/header";

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })
  return (
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      <main className="grow">
        <Header />
        <Hero />
      </main>
    </div>
  );
}

export default App;
