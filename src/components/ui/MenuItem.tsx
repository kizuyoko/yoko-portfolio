import Image from 'next/image';
import Link from 'next/link'; 

type MenuItemProps = {
  href: string;
  src: string;
  name: string;
  ariaLabel: string;
  width: number;
  height: number;
};

export const MenuItem = ({ href, src, name, ariaLabel, width, height }: MenuItemProps) => {
  return (
    <Link
      className="flex items-center gap-2 text-link"
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
      />
      <span>{name}</span>
    </Link>
  );
};