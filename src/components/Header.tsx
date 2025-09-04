'use client';

import { Logo } from "./ui/Logo";
import React, { useState, useEffect } from "react";
import { HamburgerButton } from "./ui/HamburgerButton";
import { NavList } from "./ui/NavList";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && navOpen) {
        setNavOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [navOpen]);

  return (
    <header className="w-full shadow-sm bg-background">
      <div className="flex items-center justify-between w-full max-w-screen-xl gap-6 p-4 mx-auto sm:px-8">
        <Logo className="flex-shrink-0" />
        <HamburgerButton navOpen={navOpen} toggleNav={() => setNavOpen((prev) => !prev)} />
        <nav className="items-center hidden gap-6 sm:flex">
          <NavList />
        </nav>
      </div>
      {
        navOpen && (
          <nav 
            className="items-center sm:hidden"
            id="mobile-nav"
            aria-hidden={!navOpen}
          >
            <div className="mobile-nav">
              <NavList />
          </div>
        </nav>)
      }
    </header>
  );
}