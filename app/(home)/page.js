import Designers from "@/components/home/designers/Designers";
import Features from "@/components/home/features/Features";
import Hero from "@/components/home/hero/Hero";
import Simple from "@/components/home/simple/Simple";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full font-[family-name:var(--figtree)]">
       <Hero />
       <Designers />
       <Simple />
       <Features />
    </div>
  );
}
