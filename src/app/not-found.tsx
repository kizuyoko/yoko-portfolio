import { HomeLayout } from "@/components/HomeLayout";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <HomeLayout>
      <main className="flex flex-col items-center justify-center gap-4 p-4 sm:shadow sm:p-8" role-main="true" aria-label="Main content of the Not Found page">
        <h1>404 - Not Found</h1>
        <p className="p-4">The page you are looking for does not exist.</p>
        <Button
          href="/"
          ariaLabel="Go back to Home page"
        >
          Home
        </Button>
      </main>
    </HomeLayout>
  )
}
