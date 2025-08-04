import { Button } from "@/components/ui/Button";
import { DefaultLayout } from "@/components/DefaultLayout";
import { Title } from "@/components/ui/Title";

export const metadata = {
  title: "Skills - Yoko's Portfolio",
  description: "My skills and expertise in web development.",
};

export default function Home() {
  return (
    <DefaultLayout>
      <aside className="">Sub Menu</aside>
      <section className="flex flex-col items-start flex-1">
        <Title>
          Skills
        </Title>
        <p>This is Skills Page.</p>
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
