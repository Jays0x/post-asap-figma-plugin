import CallToAction from "@/components/home/cta/CallToAction";
import Designers from "@/components/home/designers/Designers";
import Features from "@/components/home/features/Features";
import Hero from "@/components/home/hero/Hero";
import Platforms from "@/components/home/platforms/Platforms";
import Simple from "@/components/home/simple/Simple";
import Testimonies from "@/components/home/testimonies/Testimonies";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full font-[family-name:var(--figtree)]">
       <Hero />
       <Designers />
       <Simple />
       <Features />
       <Platforms />
       <Testimonies />
       <CallToAction />
    </div>
  );
}
