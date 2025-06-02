import { ChangeEventHandler } from "react";

interface InputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}

export function Input({ value, onChange, placeholder, className = "" }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded px-3 py-2 w-full ${className}`}
    />
  );
}

  