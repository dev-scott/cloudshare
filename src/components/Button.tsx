import React, { type ReactNode } from "react";
import { cn } from "../lib/utils";

type BaseButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disable?: boolean;
  isLoading?: boolean;
  className?: string;
  variant?: ButtonVariants;
  onClick?: () => void | Promise<void> | undefined;
};

type ButtonVariants =
  | "primary"
  | "secondary"
  | "delete"
  | "submit"
  | "outline"
  | "ghost";

const buttonVariants: Record<ButtonVariants, string> = {
  primary: "bg-gray-900 text-white",
  secondary: "bg-gray-300 text-black",
  delete: "bg-red-500 text-white",
  submit: "bg-green-500 text-white",
  outline: "border-2 border-blue-500 text-blue-500",
  ghost:
    "bg-transparent text-black border border-px border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition duration-300 ease-in-out",
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  disable = false,
  isLoading = false,
  className,
  onClick,
}: BaseButtonProps) => {
  return (
    <button
      className={cn(
        `flex justify-center gap-x-2 px-4 py-2 cursor-pointer rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none`,
        buttonVariants[variant],
        className,
      )}
      disabled={disable}
      type={type}
      onClick={onClick}
    >
      {isLoading ? <span>Loading</span> : children}
    </button>
  );
};

export default Button;
