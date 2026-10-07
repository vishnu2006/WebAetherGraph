import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProblemSection from "@/components/ProblemSection/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection/HowItWorksSection";
import ArchitectureSection from "@/components/ArchitectureSection/ArchitectureSection";
import DocumentIntelligence from "@/components/DocumentIntelligence/DocumentIntelligence";
import EngineeringHighlights from "@/components/EngineeringHighlights/EngineeringHighlights";
import FounderSection from "@/components/FounderSection/FounderSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-grid"></div>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ArchitectureSection />
        <DocumentIntelligence />
        <EngineeringHighlights />
        <FounderSection />
      </main>
      <Footer />
    </>
  );
}
