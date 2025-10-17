import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Composant qui applique un effet de scroll ralenti avec GSAP
 */
export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);
  const targetScrollY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScroll = () => {
      targetScrollY.current = window.scrollY;
    };

    const render = () => {
      // interpolation du scroll pour créer un effet "ralenti"
      scrollY.current += (targetScrollY.current - scrollY.current) * 0.08;
      gsap.set(container, { y: -scrollY.current });
      requestAnimationFrame(render);
    };

    // fixer la hauteur du body pour activer le scroll
    document.body.style.height = `${
      container.getBoundingClientRect().height
    }px`;

    window.addEventListener("scroll", updateScroll);
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
