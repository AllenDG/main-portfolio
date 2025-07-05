"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  forwardRef,
} from "react";
import { cn } from "@/lib/utils";

import type {
  ElementType,
  ComponentPropsWithoutRef,
  ReactNode,
  Ref,
  JSX,
} from "react";

// Mouse enter context
const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

// Custom hook for mouse enter state
// eslint-disable-next-line react-refresh/only-export-components
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

// Container component
export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => setIsMouseEntered(true);
  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-20 flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// Card body
export const CardBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
      className
    )}
  >
    {children}
  </div>
);

// Card item props
type CardItemProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
} & Omit<ComponentPropsWithoutRef<T>, keyof CardItemStyleProps>;

type CardItemStyleProps = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
};

// Forwarded card item
const CardItemInner = <T extends ElementType = "div">(
  {
    as,
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
  }: CardItemProps<T>,
  ref: Ref<HTMLElement>
) => {
  const Tag = as || "div";
  const localRef = useRef<HTMLElement>(null);

  // Expose the DOM node to the parent via ref
  useEffect(() => {
    if (!localRef.current) return;
    if (ref) {
      if (typeof ref === "function") {
        ref(localRef.current);
      } else if (typeof ref === "object" && ref !== null) {
        (ref as React.MutableRefObject<HTMLElement | null>).current = localRef.current;
      }
    }
  }, [ref]);

  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!localRef.current) return;
    if (isMouseEntered) {
      localRef.current.style.transform = `translateX(${translateX}) translateY(${translateY}) translateZ(${translateZ}) rotateX(${rotateX}) rotateY(${rotateY}) rotateZ(${rotateZ})`;
    } else {
      localRef.current.style.transform =
        "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return React.createElement(
    Tag,
    {
      ...(typeof Tag === "string" ? { ref: localRef } : {}),
      className: cn("w-fit transition duration-200 ease-linear", className),
      ...rest,
    },
    children
  );
};

export const CardItem = forwardRef(CardItemInner) as <T extends ElementType = "div">(
  props: CardItemProps<T> & { ref?: Ref<HTMLElement> }
) => JSX.Element;
