import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Philosophy from "./sections/Philosophy";
import Realisations from "./sections/Realisations";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Review from "./sections/Review";

function App() {
  return (
    <>
      <Header />
      <SmoothScroll>
        <Hero />
        <main className="p-4">
          <Services />
          <Philosophy />
          <Realisations />
          <Review />
          <CallToAction />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;
