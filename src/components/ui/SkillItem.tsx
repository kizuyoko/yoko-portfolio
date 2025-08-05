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
          <Image 
            src={icon} 
            alt={name} 
            width={48} 
            height={48} 
            className="inline-block"
            aria-label={`Skill icon for ${name}`}
            role="img"
          />
        ) : (
          <span className="font-semibold">{name}</span>
        )
      )}
    </>
  );
};
