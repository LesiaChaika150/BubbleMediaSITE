import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`border rounded-lg shadow ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={className}>{children}</div>;
}
