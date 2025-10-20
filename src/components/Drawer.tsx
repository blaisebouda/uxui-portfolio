import React, { type ReactNode } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;

  className?: string;
  position?: "left" | "right" | "top" | "bottom";
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  className,
  position = "right",
}) => {
  const positionClasses = {
    left: "left-0 top-0 h-full transform transition-transform duration-300",
    right: "right-0 top-0 h-full transform transition-transform duration-300",
    top: "top-0 left-0 w-full transform transition-transform duration-300",
    bottom:
      "bottom-0 left-0 w-full transform transition-transform duration-300",
  };

  const translateClosed = {
    left: "-translate-x-full",
    right: "translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full",
  };

  return createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={clsx(
          "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      {/* Drawer */}
      <div
        className={clsx(
          "fixed z-50 bg-[#4B4B4B] shadow-xl transition-transform duration-300",
          positionClasses[position],
          isOpen ? "translate-x-0 translate-y-0" : translateClosed[position],
          className
        )}
      >
        {children}
      </div>
    </>,
    document.body
  );
};

export default Drawer;
