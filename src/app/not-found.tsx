import { HomeLayout } from "@/components/HomeLayout";
import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";

export default function NotFound() {
  return (
    <HomeLayout>
      <div
      className="sm:
      m-0 p-4 sm:p-16 bg-[var(--mainBackground)]"
    >
        <Title homeLayout>
          404 - Not Found
        </Title>
        <p className="py-4">The page you are looking for does not exist.</p>
        <div className="flex flex-col items-center justify-center w-full gap-0 mt-6 sm:gap-4 sm:flex-row">
          <Button
            href="/"
            ariaLabel="Go back to Home page"
            className="primary-button"
          >
            Home
          </Button>
        </div>
      </div>
    </HomeLayout>
  )
}
