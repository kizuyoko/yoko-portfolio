import Image from "next/image";

type FooterItemProps = {
  href: string;
  src: string;
  alt: string;
  ariaLabel: string;
  width: number;
  height: number;
};

export const FooterItem = ({ href, src, alt, ariaLabel, width, height }: FooterItemProps) => {
  return (
    <a
      className="image-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <Image
        aria-hidden
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </a>
  );
}