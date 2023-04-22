import Navbar from "./components/widgets/navbar";
import HomePage from "./pages/home";

export default function App() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-gray-700"
        style={{ backgroundImage: "url(/images/bg4.png)" }}
      >
        <Navbar />
        <HomePage />
      </div>
      <div></div>
    </>
  );
}
