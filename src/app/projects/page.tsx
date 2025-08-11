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
      <p>This is Projects Page.</p>
      <Button
        href="/"
        ariaLabel="Go back to Home page"
      >
        Home
      </Button>
    </section>
  );
}
