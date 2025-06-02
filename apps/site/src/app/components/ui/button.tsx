import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
}
