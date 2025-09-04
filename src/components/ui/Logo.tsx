import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link 
      href="/" 
      className={`flex items-center justify-center ${className}`}
      aria-label="Go Home Page"
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