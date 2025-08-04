import { HomeLayout } from "@/components/HomeLayout";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";

export default function NotFound() {
  return (
    <HomeLayout>
      <Title homeLayout>
        404 - Not Found
      </Title>
      <p className="py-4">The page you are looking for does not exist.</p>
      <Button
        href="/"
        ariaLabel="Go back to Home page"
      >
        Home
      </Button>
    </HomeLayout>
  )
}
