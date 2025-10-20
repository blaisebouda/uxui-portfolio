export default function Section({
  children,
  id,
  bg,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  id: string;
  bg?: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`pt-12 md:pt-30 pb-10 md:pb-30 ${
        bg ? `${bg} bg-cover bg-center` : ""
      } ${className}`}
    >
      <div
        className={`relative  [max-width:1200px] mx-auto ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
