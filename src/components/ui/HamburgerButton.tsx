"use client";
import React from "react";
import { useEffect } from "react";

interface Props {
  navOpen: boolean;
  toggleNav: () => void;
}

export const HamburgerButton: React.FC<Props> = ({ navOpen, toggleNav }) => {

  useEffect(() => {
    if (!navOpen) return;

    const focusableElements = document.querySelectorAll(
      "#mobile-nav a, #mobile-nav button"
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [navOpen]);

  return (
    <div className="items-center sm:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 sm:hidden"
        onClick={toggleNav}
        aria-expanded={navOpen}
        aria-controls="mobile-nav"
      >
        <span className={`block h-0.5 w-6 bg-[var(--color-text)] duration-300 ${navOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-0.5 w-6 bg-[var(--color-text)] duration-300 ${navOpen ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-[var(--color-text)] duration-300 ${navOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>
    </div>
  );
}
