import Image from "next/image";

type skillItemProps = {
  name: string;
  home?: number;
  category?: string;
  image?: string;
  darkInvert?: boolean;
};

export const SkillItem = ({ name, home, image, darkInvert }: skillItemProps) => {
  return (
    <>
      {home ? (
        image ? (
          <Image
            src={image}
            alt="" 
            aria-hidden="true"
            width={48}
            height={48}
            className="inline-block"
            aria-label={`Skill icon for ${name}`}
            role="img"
          />
        ) : null
      ) : (
        image ? (
            <div className="flex flex-col items-center gap-1 mb-1 mr-3 max-w-16">
            <Image
              src={image}
              alt="" 
              aria-hidden="true"
              width={38}
              height={38}  
              className={`inline-block ${darkInvert ? "dark:invert" : ""}`}
              aria-label={`Skill icon for ${name}`}
              role="img"
            />
            <span className="text-sm text-center">{name}</span>
            </div>
           
        ) : (
            <span className="font-semibold bg-[var(--color-skill-item)] px-4 py-1 rounded">{name}</span>
        )
      )}
    </>
  );
};
