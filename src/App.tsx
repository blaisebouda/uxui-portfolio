import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Philosophy from "./sections/Philosophy";
import Realisations from "./sections/Realisations";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="p-4">
        <Services />
        <Philosophy />
        <Realisations />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
