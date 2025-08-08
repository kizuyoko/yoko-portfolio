import Image from "next/image";

type skillItemProps = {
  name: string;
  home?: boolean;
  category?: string;
  icon?: string;
};

export const SkillItem = ({ name, home, icon }: skillItemProps) => {
  return (
    <>
      {home ? (
        icon ? (
          <Image 
            src={icon} 
            alt={name} 
            width={48} 
            height={48} 
            className="inline-block"
            aria-label={`Skill icon for ${name}`}
            role="img"
          />
        ) : null
      ) : (
        icon ? (
          <div className="flex flex-col items-center gap-1 mb-1 mr-3 max-w-16">
            <Image 
              src={icon} 
              alt={name} 
              width={38} 
              height={38}  
              className="inline-block"
              aria-label={`Skill icon for ${name}`}
              role="img"
            />
            <span className="text-sm text-center">{name}</span>
          </div>
           
        ) : (
            <span className="font-semibold bg-[var(--color-skill-item)] px-4 py-1 rounded mb-4">{name}</span>
        )
      )}
    </>
  );
};
