"use client";
import { siteConfig } from "@/app/constants/site";
import { MenuItem } from "./MenuItem";

const src = (name: string) => `/menu-${name.toLowerCase()}.svg`;

export const NavList = () => {
  return (
    <>
      {siteConfig.nav.map((item) => (
        <MenuItem
          key={item.name}
          href={item.href}
          src={src(item.name)}
          name={item.name}
          ariaLabel={`Go to ${item.name} page`}
          width={24}
          height={24}
        />
      ))}
    </>
  );
};
