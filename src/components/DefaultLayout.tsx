import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--mainBackground)] defaultLayout">
      <Header />
      <main className="flex flex-col flex-1 w-full max-w-screen-xl gap-6 p-4 mx-auto mt-1 sm:flex-row-reverse sm:p-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};
