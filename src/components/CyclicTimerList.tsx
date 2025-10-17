import React, { useState } from "react";
import useInterval from "../hooks/useInterval";

type CyclicTimerListProps = {
  duration?: number;
  activeClassName?: string;
  inactiveClassName?: string;
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  callback?: (index: number) => void;
};

const CyclicTimerList: React.FC<CyclicTimerListProps> = ({
  duration = 3000,
  activeClassName = "active",
  inactiveClassName = "",
  children,
  className,
  pauseOnHover = false,
  callback,
}) => {
  const items = React.Children.toArray(children);
  if (items.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // utilise ton hook useInterval si il existe
  useInterval(() => {
    if (!paused) setActiveIndex((prev) => (prev + 1) % items.length);
    callback?.(activeIndex);
  }, duration);

  return (
    <div
      className={className}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {items.map((child, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            className={`${
              isActive ? activeClassName : inactiveClassName
            }`.trim()}
            data-active={isActive ? "true" : "false"}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default CyclicTimerList;
