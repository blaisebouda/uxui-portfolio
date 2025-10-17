import React from "react";

type TestimonialsMarqueeProps = {
  children: React.ReactNode[];
  speed?: string; // Exemple: "30s" ou "50s"
  reverse?: boolean;
  gradientColor?: string;
};

const TestimonialsMarquee: React.FC<TestimonialsMarqueeProps> = ({
  children,
  speed = "30s",
  reverse = false,
  gradientColor = "#060010",
}) => {
  const animationName = reverse ? "marquee-right" : "marquee-left";

  return (
    <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden">
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-[200px] z-10 bg-gradient-to-r from-[${gradientColor}] to-transparent`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-[200px] z-10 bg-gradient-to-l from-[${gradientColor}] to-transparent`}
      />

      <div
        className="flex gap-5 w-max"
        style={{
          animation: `${animationName} ${speed} linear infinite`,
        }}
      >
        {[...children, ...children].map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      {/* Styles dynamiques des keyframes */}
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialsMarquee;
