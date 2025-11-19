import Image from "next/image";
import HeroBanner from "./Home/HeroBanner";
import AboutSection from "./Home/AboutSection";
import CategorySection from "./Home/CategorySection";
import WhyChooseUs from "./Home/WhyChooseUs";
import StatsSection from "./Home/StateSection";
import FAQSection from "./Home/FAQSection";
import InstructorSection from "./Home/InstructorSection";
import BetterFuture from "./Home/BetterFuture";
import TopCardSec from "./Home/TopCardSec";

export default function Home() {
  return (
    <div className="mb-20">

      <div>
        <HeroBanner></HeroBanner>
      </div>

      <div>
        <AboutSection></AboutSection>
      </div>
      <div>
        <CategorySection></CategorySection>
      </div>
      <div>
        <WhyChooseUs></WhyChooseUs>
      </div>
      <div>
        <TopCardSec></TopCardSec>
      </div>
      <div>
        <StatsSection></StatsSection>
      </div>
      <div>
        <FAQSection></FAQSection>
      </div>
      <div>
        <InstructorSection></InstructorSection>
      </div>
      <div>
        <BetterFuture></BetterFuture>
      </div>
      
      
    </div>
  );
}
