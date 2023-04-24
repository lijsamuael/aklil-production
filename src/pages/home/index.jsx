import LandingHeader from "../../components/views/landingHeader";
// import ServiceHeader from "../../components/views/serviceHeader";
import Signup from "../../components/views/signup";
import Portfolios from "../../components/views/testimonial";
import TeamSection from "../../components/views/teamSection";
import AboutSection from "../../components/views/aboutSection";
import ContactComponent from "../contact";

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <LandingHeader />
      <Signup />
      <AboutSection />

      <Portfolios />
      {/* <ServiceHeader /> */}
      {/* <TeamSection /> */}
      <TeamSection />
      <ContactComponent />
    </main>
  );
}
