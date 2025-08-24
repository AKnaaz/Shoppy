import Image from "next/image";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <Footer></Footer>
    </div>
  );
}
