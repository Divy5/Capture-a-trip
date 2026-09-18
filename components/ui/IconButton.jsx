"use client";

import React from "react";

export function IconButton({
  icon: Icon,
  ariaLabel,
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex items-center justify-center p-2 rounded-full transition-colors hover:bg-white/10 active:scale-95 ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
}
