import Link from "next/link";
import { slugify } from "@/utils/slugify";

type SubMenuProps = {
  title: string;
  items: string[];
  isProjects?: boolean
};

export const SubMenu = ({ title, items, isProjects }: SubMenuProps) => {
  return (
    <aside className="sm:sticky sm:right-0 sm:max-w-1/4 sm:mr-8 sm:mt-8">
      <div className="sub-menu">
        <input type="checkbox" id="submenu-toggle" className="hidden peer" />
        <label htmlFor="submenu-toggle" className="cursor-pointer sm:hidden">
          <h3>{title}</h3>
        </label>
        <ul>  
          {items.map(item => (
          <li key={item}>
            {
              isProjects ? 
                <Link href={`/projects/${slugify(item)}`}>{item}</Link>
              : 
                <Link href={`#${slugify(item)}`}>{item}</Link>
            }
          </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};