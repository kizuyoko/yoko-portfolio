import { Button } from "@/components/ui/Button";
import { HomeLayout } from "@/components/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
    <main 
      className="flex flex-col items-center justify-center gap-6 p-4 sm:shadow sm:p-8" 
      role-main="true"
      aria-label="Main content of the homepage"
    >
      <h1>Welcome to My Portfolio!</h1>
      <p>But sorry, it is not ready yet.</p>
      <Button
        href="/about"
        ariaLabel="Go to About page for site details"
      >
        About
      </Button>
      </main>
    </HomeLayout>
  );
}
