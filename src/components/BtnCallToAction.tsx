export const BtnCallToAction = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <button className="font-[Unbounded] cursor-pointer text-black px-6 py-3 bg-gradient-to-b from-gray-50 to-neutral-400 rounded-xl inline-flex justify-center items-center gap-2 transition-all duration-300 hover:brightness-85">
      {children}
    </button>
  );
};
