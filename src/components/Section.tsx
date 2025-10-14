export default function Section({
  children,
  id,
  bg,
  className,
}: {
  children: React.ReactNode;
  id: string;
  bg?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`pt-30 pb-30  ${
        bg ? `bg-[${bg}] bg-cover bg-center` : ""
      } ${className}`}
    >
      <div className="relative w-max [max-width:1200px] mx-auto">
        {children}
      </div>
    </section>
  );
}
