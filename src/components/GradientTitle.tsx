export default function GradientTitle({
  className = "",
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`font-bold font-[Unbounded] bg-[radial-gradient(circle_at_center,_#FFFFFF_37%,_#999999_100%)] bg-clip-text text-transparent text-4xl ${className}`}
    >
      {children}
    </h1>
  );
}
