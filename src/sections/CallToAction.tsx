import GradientTitle from "../components/GradientTitle";
import BtnCallToAction from "../components/BtnCallToAction";
import { Mail } from "lucide-react";
import circularLightSoft from "../assets/circular_light_soft.png";
import whatsapp from "../assets/whatsapp.svg";
import arrowTop from "../assets/arrow_top.svg";
import AnimatedContent from "../components/AnimatedContent";

export default function CallToAction() {
  return (
    <section id="contact" className="md:pt-30 pt-20 md:pb-30 pb-20">
      <AnimatedContent threshold={0.2}>
        <div className="relative overflow-hidden w-full max-w-[1200px] mx-auto bg-black/40 p-6 md:p-12 rounded-2xl backdrop-blur-sm border border-white/25">
          <div className=" flex flex-col items-center gap-2 ">
            <div className="flex items-center gap-2 border border-white/10 bg-white/10  px-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-white rounded-full text-sm"></span>{" "}
              Je suis disponible
            </div>
            <GradientTitle className="md:text-4xl text-center">
              Avez vous un Projet ?
            </GradientTitle>
            <p className="text-center md:text-lg text-[var(--primary-color-400)]">
              Créons votre prochaine grande idée.
            </p>
          </div>
          <div className="pt-8 flex items-center md:gap-4 gap-2 max-w-[440px] mx-auto ">
            <BtnCallToAction className="w-full">
              <span>
                <Mail />
              </span>
              Mail
            </BtnCallToAction>
            <BtnCallToAction className="w-full">
              <span>
                <img src={whatsapp} alt="whatsapp" />
              </span>
              Whatsapp
            </BtnCallToAction>
          </div>
          <img
            className="absolute top-[60%] md:top-[120%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] "
            src={circularLightSoft}
            alt="Effect"
          />
          <img
            className="hidden md:block md:left-1/6 absolute lg:left-1/4 -translate-x-1/2 -translate-y-1/2 "
            src={arrowTop}
            alt="arrow-top"
          />
        </div>
      </AnimatedContent>
    </section>
  );
}
