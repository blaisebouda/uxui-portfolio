import GradientTitle from "./GradientTitle";
import arrowBottom from "../assets/arrow_bottom.svg";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GradientTitle className="relative w-max">
      {children}
      <span className="absolute top-14 right-0">
        <img src={arrowBottom} alt="arrow-bottom" />
      </span>
    </GradientTitle>
  );
}
