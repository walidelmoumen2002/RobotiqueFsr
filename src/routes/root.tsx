import { useEffect } from "react";
import "@/src/css/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "@components/ui/header";
import Footer from "../components/ui/footer";
import { Outlet } from "react-router-dom";

function Root() {

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
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
