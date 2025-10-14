import circular_ligth from "../assets/circular_light.png";
import { BtnCallToAction } from "../components/BtnCallToAction";
import { GradientTitle } from "../components/GradientTitle";

export function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen flex items-center justify-center overflow-hidden relative"
    >
      <div>
        <div>
          <img
            className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            src={circular_ligth}
            alt="Effect"
          />
        </div>
        <div className=" relative pt-40 flex flex-col items-center gap-6 text-center max-w-[600px] mx-auto">
          <GradientTitle className="text-5xl">
            Des UI simples Une UX meilleure
          </GradientTitle>
          <p className=" max-w-[400px] mx-auto text-lg text-[var(--primary-color-400)]">
            Je crée des interfaces modernes et simple qui rendent vos
            utilisateurs heureux.
          </p>
          <BtnCallToAction>Me contacter</BtnCallToAction>
        </div>
      </div>
    </section>
  );
}
