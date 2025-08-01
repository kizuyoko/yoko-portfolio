import { Button } from "@/components/ui/Button";
import { DefaultLayout } from "@/components/DefaultLayout";

export const metadata = {
  title: "About - Boilerplate",
  description: "Learn more about this boilerplate project.",
};

export default function Home() {
  return (
    <DefaultLayout>
      <main className="flex flex-col items-center flex-1 gap-4 p-4 sm:p-8">
        <h1>About</h1>
        <p>This is About Page.</p>
        <Button
          href="/"
          ariaLabel="Go back to Home page"
        >
          Home
        </Button>
      </main>
    </DefaultLayout>
  );
}
