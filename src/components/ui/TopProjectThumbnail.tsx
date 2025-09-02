import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

type TopProjectThumbnailProps = {
  title: string;
  image: string;
  techStack: string[];
  index: number;
}
export default function TopProjectThumbnail({ title, image, techStack, index  }: TopProjectThumbnailProps) {
  return (
    <article
      key={slugify(title)}
      className="relative overflow-hidden transition-shadow duration-300 bg-white shadow-sm hover:shadow-xl group"
    >
      <Link 
        href={`/projects/${slugify(title)}`}
        aria-label={`View project: ${title}`}>
        <Image
          src={`/projects/${image}`}
          width={640}
          height={445}
          alt="" 
          aria-hidden="true"
          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          priority={index === 0}
        />
        <div className="absolute bottom-0 left-0 flex flex-col w-full px-4 py-2 bg-black opacity-70">
          <h3 className="font-semibold text-white font-sm">{title}</h3>
          <p className="text-sm text-white truncate">{techStack.join(', ')}</p>
        </div>
      </Link>
    </article>
  );
}