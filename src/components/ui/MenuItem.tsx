'use client';

import Image from 'next/image';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation';

type MenuItemProps = {
  href: string;
  src: string;
  name: string;
  ariaLabel: string;
  width: number;
  height: number;
};

export const MenuItem = ({ href, src, name, ariaLabel, width, height }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link
      className="flex items-center gap-2 transition-all duration-200 group text-link hover:text-accent"
      href={href}
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <Image
        aria-hidden
        src={src}
        alt={name}
        width={width}
        height={height}
        className="transition-transform duration-200 group-hover:scale-110 dark:invert"
      />
      <span className={`transition-transform duration-200 group-hover:translate-x-1 ${isActive ? 'border-b' : ''}`}>{name}</span>
    </Link>
  );
};

