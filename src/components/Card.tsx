export const Card = ({
  className = "",
  children,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white/5 border-1 border-white/25 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
};
