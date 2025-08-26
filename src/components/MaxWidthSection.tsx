import React from "react";
import { cn } from "../lib/utils";

interface props {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthSection = (props: props) => {
  return (
    <div
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", {
        [props.className]: props.className,
      })}
    >
      {props.children}
    </div>
  );
};

export default MaxWidthSection;
