"use client";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { usePathname } from "next/navigation";

type SubMenuProps = {
  title: string;
  items: string[];
  isProjects?: boolean
};

export const SubMenu = ({ title, items, isProjects }: SubMenuProps) => {
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (window.innerWidth < 640) { 
      const toggle = document.getElementById("submenu-toggle") as HTMLInputElement;
      if (toggle) toggle.checked = false;
    }
  };

  return (
    <aside className="sm:sticky sm:right-0 sm:max-w-1/4 sm:mr-8 sm:mt-8">
      <div className="sub-menu">
        <input type="checkbox" id="submenu-toggle" className="hidden peer" />
        <label htmlFor="submenu-toggle" className="cursor-pointer sm:hidden">
          <h3>{title}</h3>
        </label>
        <ul>  
          {
            items.map((item) => {
            const href = isProjects
              ? `/projects/${slugify(item)}`
              : `#${slugify(item)}`;
            const isActive = isProjects
              ? pathname === href
              : false; 

            return (
              <li key={item}>
                <Link
                  href={href}
                  className={isActive ? "underline" : ""}
                  onClick={handleLinkClick}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};