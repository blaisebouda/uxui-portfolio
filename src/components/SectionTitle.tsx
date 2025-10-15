import GradientTitle from "./GradientTitle";
import arrowBottom from "../assets/arrow_bottom.svg";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GradientTitle className="relative w-max md:text-4xl">
      {children}
      <span className="hidden md:block absolute top-14 right-[-40px]">
        <img src={arrowBottom} alt="arrow-bottom" />
      </span>
    </GradientTitle>
  );
}
