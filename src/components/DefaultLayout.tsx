import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--mainBackground)] defaultLayout">
      <Header />
      <main className="flex flex-col flex-1 w-full max-w-screen-xl gap-6 mx-auto sm:flex-row-reverse">
        {children}
      </main>
      <Footer />
    </div>
  );
};
