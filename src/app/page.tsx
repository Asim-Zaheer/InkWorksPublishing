import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedBooks />
      <Categories />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
