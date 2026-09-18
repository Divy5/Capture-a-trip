"use client";

import React from "react";

export function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-[#008342] text-white hover:bg-[#007038] active:scale-[0.98] shadow-[0px_4px_20px_0px_rgba(0,131,66,0.35)]",
    secondary:
      "bg-white text-[#008342] border border-[#FFFFFF4D] hover:bg-zinc-50 active:scale-[0.98] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]",
    ghost:
      "bg-transparent text-white/80 hover:text-white hover:bg-white/10",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
