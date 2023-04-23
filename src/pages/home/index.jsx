import LandingHeader from "../../components/views/landingHeader";
import ServiceHeader from "../../components/views/serviceHeader";
import Testmonial from "../../components/views/testimonial";
import ProductList from "../../components/views/productList";
 import ContactComponent from "../../components/views/contact/contact";
 import TeamComponent from "../../components/views/team/team";

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      <LandingHeader />
      <ServiceHeader />
      <Testmonial />
      <ProductList />
      <ContactComponent/>
      <TeamComponent/>
    </main>
  );
}
