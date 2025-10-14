export default function Section({
  children,
  id,
  className,
  bg,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
  bg?: string;
}) {
  return (
    <section
      id={id}
      className={`pt-30 pb-30 w-max [max-width:1200px] mx-auto ${
        bg ? `bg-[url('${bg}')] bg-cover bg-center` : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
