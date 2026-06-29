import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import Cta from "@/components/home/Cta";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-full bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
