import { Button } from "@/components/ui/Button";
import { DefaultLayout } from "@/components/DefaultLayout";
import { Title } from "@/components/ui/Title";

export const metadata = {
  title: "Projects - Yoko's Portfolio",
  description: "My projects and works in web development.",
};

export default function Home() {
  return (
    <DefaultLayout>
      <aside className="">Sub Menu</aside>
      <section className="flex flex-col items-start flex-1">
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
    </DefaultLayout>
  );
}
