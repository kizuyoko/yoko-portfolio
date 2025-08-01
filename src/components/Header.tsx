import { siteConfig } from "@/app/constants/site";
import { MenuItem } from "./ui/MenuItem";
import { Logo } from "./ui/Logo";

export const Header = () => {
  const src = (name: string) => `/menu-${name.toLowerCase()}.svg`;
  
  return (
    <header className="flex items-center justify-between w-full gap-6 p-4 shadow-sm bg-background">
      <Logo className="flex-shrink-0" />
      <nav className="items-center hidden gap-6 sm:flex">
        {
          siteConfig.nav.map(item => (
            <MenuItem
              key={item.name}
              href={item.href}
              src={src(item.name)} 
              name={item.name} 
              ariaLabel={`Go to ${item.name} page`}
              width={24}
              height={24}
            />
          ))
        }
      </nav>
    </header>
  );
}