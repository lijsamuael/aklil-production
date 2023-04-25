
import Portfolios from "../../components/views/portfolioSection";
import TeamSection from "../../components/views/teamSection";
import AboutSection from "../../components/views/aboutSection";
import ContactComponent from "../contact";
import MainHeader from "../../components/views/mainHeader";
import ServiceHeader from "../../components/views/serviceHeader";

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

      <ContactComponent />
    </main>
  );
}
