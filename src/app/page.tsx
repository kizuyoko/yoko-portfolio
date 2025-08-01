import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main 
      className="flex flex-col items-center justify-center gap-4 p-4 shadow sm:p-8" 
      role="main"
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
  );
}
