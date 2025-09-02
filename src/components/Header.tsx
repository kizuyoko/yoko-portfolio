'use client';

import { Logo } from "./ui/Logo";
import React, { useState } from "react";
import { HamburgerButton } from "./ui/HamburgerButton";
import { NavList } from "./ui/NavList";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  
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
          <nav className="items-center sm:hidden">
            <div className="mobile-nav">
              <NavList />
          </div>
        </nav>)
      }
    </header>
  );
}