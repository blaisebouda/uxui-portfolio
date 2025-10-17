import blackProfile from "/black_profile.jpg";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const scrollTo = (id: string) => {
  gsap.to(window, {
    duration: 0.2,
    scrollTo: { y: id },
    ease: "power3.out",
  });
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2">
      <div className="bg-[var(--primary-color-900)/60] backdrop-blur-sm border border-white/10 rounded-full px-4 max-w-[800px] mx-auto h-[60px] flex items-center justify-between">
        <a className="flex items-center gap-2" href="#">
          <img
            className="rounded-full"
            width={32}
            height={32}
            src={blackProfile}
            alt="Profile"
          />
          <span className="font-[Unbounded]">blaiseuxui</span>
        </a>
        <nav>
          <ul className="flex gap-6 text-[var(--primary-color-400)] font-semibold [&_li:hover]:text-white transition-all duration-300">
            <li
              onClick={() => scrollTo("#services")}
              className="hidden md:block transition duration-300 ease-in-out"
            >
              <a href="#services">Services</a>
            </li>
            <li
              onClick={() => scrollTo("#realisations")}
              className="hidden md:block transition duration-300 ease-in-out"
            >
              <a href="#realisations">Realisations</a>
            </li>
            <li
              onClick={() => scrollTo("#review")}
              className="hidden md:block transition duration-300 ease-in-out"
            >
              <a href="#review">Avis</a>
            </li>
            <li
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 transition duration-300 ease-in-out"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-white block"></span>
              <a href="#contact">Me conctacter</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
