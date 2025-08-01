import Image from "next/image";
import { FooterItem } from "@/components/ui/footerItem";

export const Footer = () => {
  return (
    <footer className="flex gap-3 flex-wrap items-center justify-center">
      <FooterItem
        href="https://github.com/kizuyoko/yoko-portfolio"
        src="/github.svg"
        alt="GitHub"
        ariaLabel="GitHub Repository"
        width={36}
        height={36}
      />
      <FooterItem
        href="https://www.linkedin.com/in/kizuyoko/"
        src="/linkedin.svg"
        alt="LinkedIn"
        ariaLabel="LinkedIn Profile"
        width={36}
        height={36}
      />
    </footer>
  );
} 