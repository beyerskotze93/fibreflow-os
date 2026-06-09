import * as React from "react";

const variants = {
  default: "bg-sky-500 text-white hover:bg-sky-400",
  secondary: "bg-zinc-800 text-slate-300 hover:bg-zinc-700",
  ghost: "bg-transparent text-slate-200 hover:bg-zinc-800",
};

export function Button({
  className = "",
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof variants }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-zinc-950 ${variants[variant]} ${className}`}
    />
  );
}
