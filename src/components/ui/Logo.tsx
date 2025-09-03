import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link 
      href="/" 
      className={`flex items-center justify-center ${className}`}
      tabIndex={-1} 
      aria-hidden="true"
    >
      <Image
        src="/logo-y.svg"
        alt="Y"
        width={22}
        height={22}
        className="dark:invert"
      />
    </Link>
  );
}