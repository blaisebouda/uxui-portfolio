import circularLight from "../assets/circular_light.png";
import AnimatedContent from "../components/AnimatedContent";
import BtnCallToAction from "../components/BtnCallToAction";
import FadeContent from "../components/FadeContent";
import GradientTitle from "../components/GradientTitle";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[600px] md:h-screen flex items-center justify-center overflow-hidden relative"
    >
      <div>
        <FadeContent duration={1500}>
          <div>
            <img
              className="absolute max-w-[400px] md:max-w-[940px] top-65 md:top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              src={circularLight}
              alt="Effect"
            />
          </div>
        </FadeContent>

        <div className="px-4 relative pt-20 md:pt-40 flex flex-col items-center gap-6 text-center max-w-[600px] mx-auto">
          <AnimatedContent delay={0.2}>
            <GradientTitle className="md:text-5xl">
              Des UI simples <br /> Une UX meilleure
            </GradientTitle>
          </AnimatedContent>
          <AnimatedContent delay={0.4}>
            <p className="w-full max-w-[400px] mx-auto md:text-lg text-[var(--primary-color-400)]">
              Je crée des interfaces modernes et simple qui rendent vos
              utilisateurs heureux.
            </p>
          </AnimatedContent>
          <AnimatedContent threshold={0.05} delay={0.6}>
            <BtnCallToAction>Me contacter</BtnCallToAction>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
