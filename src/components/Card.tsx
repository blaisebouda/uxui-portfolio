export const Card = ({
  className = "",
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white/5 border-1 border-white/25 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
};
