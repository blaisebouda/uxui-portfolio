import { Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex p-4 justify-between flex-wrap gap-4 items-center w-full max-w-[1200px] mx-auto pt-16 pb-20 text-[var(--primary-color-400)] border-t border-white/25">
      <div className="flex items-center gap-2">
        <a
          className="hover:text-white transition-all duration-300"
          href="#"
          target="_blank"
        >
          <Facebook />
        </a>
        <a
          className="hover:text-white transition-all duration-300"
          href="https://linkedin.com/in/blaisebouda/"
          target="_blank"
        >
          <Linkedin />
        </a>
      </div>
      <div>
        © 2025 - Designer par{" "}
        <a
          className="font-semibold hover:underline hover:text-white transition-all duration-300"
          href="#"
        >
          @blaiseuiux
        </a>{" "}
        - Intégration et développement{" "}
        <a
          className="font-semibold hover:underline hover:text-white transition-all duration-300"
          href="https://blaisebouda.github.io/portfolio"
        >
          @blaisebouda
        </a>
      </div>
    </footer>
  );
}
