import { Button } from "@/components/ui/Button";
import { HomeLayout } from "@/components/HomeLayout";
import { Title } from "@/components/ui/Title";

export default function Home() {
  return (
    <HomeLayout>
      <Title homeLayout>
        Welcome to My Portfolio!
      </Title>
      <p>But sorry, it is not ready yet.</p>
      <Button
        href="/about"
        ariaLabel="Go to About page for site details"
      >
        About
      </Button>
    </HomeLayout>
  );
}
