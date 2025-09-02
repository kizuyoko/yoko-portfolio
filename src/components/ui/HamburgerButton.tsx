"use client";
import React from "react";

interface Props {
  navOpen: boolean;
  toggleNav: () => void;
}

export const HamburgerButton: React.FC<Props> = ({ navOpen, toggleNav }) => (
  <div className="items-center sm:hidden">
    <button
      type="button"
      aria-label="Toggle menu"
      className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 sm:hidden"
      onClick={toggleNav}
    >
      <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${navOpen ? "rotate-45 translate-y-2" : ""}`} />
      <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${navOpen ? "opacity-0" : ""}`} />
      <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${navOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
  </div>
);
