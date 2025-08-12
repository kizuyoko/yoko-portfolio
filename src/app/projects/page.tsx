import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";

export const metadata = {
  title: "Projects - Yoko's Portfolio",
  description: "My projects and works in web development.",
};

export default function Projects() {
  return (
    <section>
      <Title>
        Projects
      </Title>
      <h2 className="mt-6">Top Projects</h2>
      
      <Button
        href="/other-projects"
        ariaLabel="Go to Other Projects"
      >
        Other Projects
      </Button>
    </section>
  );
}
