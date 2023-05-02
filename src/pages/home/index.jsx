
import Portfolios from "../../components/views/portfolioSection";
import TeamSection from "../../components/views/teamSection";
import AboutSection from "../../components/views/aboutSection";
import MainHeader from "../../components/views/mainHeader";
import ServiceHeader from "../../components/views/serviceHeader";
import ContactSection from "../../components/views/teamSection/contactSection";

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <MainHeader />
      <ServiceHeader />
      <AboutSection />
      <div style={{ backgroundImage: "url(/gifs/bg.gif)" }}>
        {" "}
        <Portfolios />
        <TeamSection />
      </div>

      <ContactSection />
    </main>
  );
}
