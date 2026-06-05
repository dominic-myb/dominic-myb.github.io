import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonType = "button" | "submit";
type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: "",
  secondary: "",
  ghost: "",
  outline: "",
};

function Button({
  type,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps): React.JSX.Element {
  return (
    <button
      type={type}
      className={cn("", variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
