"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

interface ResizableDivProps {
  children: ReactNode;
}

const ResizableDiv = ({ children }: ResizableDivProps) => {
  const aspectRatio = 60 / 18; // Define the aspect ratio
  const [width, setWidth] = useState(500);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedWidth = localStorage.getItem("width");
      if (savedWidth) setWidth(parseInt(savedWidth, 10));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("width", width.toString());
    }
  }, [width]);

  return (
    <div
      ref={divRef}
      style={{
        width: `100%`,
        overflow: "hidden",
        left: `0px`,
      }}
      className="absolute z-[1] ring ring-red-500 bg-white/0 aspect-[60/18] top-1/2 -translate-y-1/2"
    >
      {children}
    </div>
  );
};

export default ResizableDiv;
