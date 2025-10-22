import GradientTitle from "./GradientTitle";
import arrowBottom from "../assets/arrow_bottom.svg";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatedContent threshold={0.3}>
      <GradientTitle className="relative w-max md:text-4xl">
        {children}
        <FadeContent delay={1}>
          <span className="hidden md:block absolute top-14 right-[-40px]">
            <img src={arrowBottom} alt="arrow-bottom" />
          </span>
        </FadeContent>
      </GradientTitle>
    </AnimatedContent>
  );
}
