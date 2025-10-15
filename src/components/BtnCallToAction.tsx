export default function BtnCallToAction({
  children,
  href = "#",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`font-[Unbounded] cursor-pointer text-black md:px-6 px-4 py-3 bg-gradient-to-b from-gray-50 to-neutral-400 rounded-xl inline-flex justify-center items-center gap-2 transition-all duration-300 hover:brightness-85 ${className}`}
    >
      {children}
    </a>
  );
}
