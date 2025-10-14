import blackProfile from "/black_profile.jpg";

export function Header() {
  return (
    <header className="bg-[var(--primary-color-900)/60] backdrop-blur-sm border border-white/10 rounded-full px-4 max-w-[800px] mx-auto h-[60px] flex items-center justify-between fixed top-4 left-0 right-0 z-50">
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
          <li className="transition duration-300 ease-in-out">
            <a href="#services">Services</a>
          </li>
          <li className="transition duration-300 ease-in-out">
            <a href="#realisations">Realisations</a>
          </li>
          <li className="transition duration-300 ease-in-out">
            <a href="#avis">Avis</a>
          </li>
          <li className="flex items-center gap-2 transition duration-300 ease-in-out">
            <span className="w-[8px] h-[8px] rounded-full bg-white block"></span>
            <a href="#contact">Me conctacter</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
