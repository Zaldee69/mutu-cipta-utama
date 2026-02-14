import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Advantages } from "@/components/Advantages";
import { CallToAction } from "@/components/CallToAction";
import { Services } from "@/components/Services";
// import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
// import { Clients } from "@/components/Clients";
import RecentBlogs from "@/components/RecentBlogs";
import { Clients } from "@/components/Clients";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.mutuciptautama.id/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Advantages />
      <CallToAction />
      <Services />
      <FinalCTA />
      <RecentBlogs />
      {/* <Testimonials /> */}
      <Clients />
    </main>
  );
}
