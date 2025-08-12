import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

const cardVariants = {
  default: "bg-white border border-gray-200",
  elevated: "bg-white shadow-lg border border-gray-100",
  outlined: "bg-transparent border-2 border-gray-200",
  ghost: "bg-gray-50/50 border-0"
};

const cardSizes = {
  sm: "p-4 rounded-lg",
  md: "p-6 rounded-xl", 
  lg: "p-8 rounded-2xl"
};

export function Card({ children, className, variant = "default", size = "md" }: CardProps) {
  return (
    <div className={cn(
      "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      cardVariants[variant],
      cardSizes[size],
      className
    )}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("text-xl font-bold text-gray-900 leading-tight", className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-gray-600 leading-relaxed", className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("mt-6 pt-4 border-t border-gray-100", className)}>
      {children}
    </div>
  );
}
