import { Button } from "@/components/ui/Button";
import { DefaultLayout } from "@/components/DefaultLayout";
import { Title } from "@/components/ui/Title";

export const metadata = {
  title: "Contact - Yoko's Portfolio",
  description: "Get in touch with me.",
};

export default function Home() {
  return (
    <DefaultLayout>
      <aside className="">&nbsp;</aside>
      <section className="flex flex-col items-start flex-1">
        <Title>
          Contact
        </Title>
        <p>This is Contact Page.</p>
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
