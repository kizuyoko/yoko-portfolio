import { Header } from "./Header";
import { Footer } from "./Footer";

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] homeLayout">
      <Header />
      <div className="hidden sm:block"></div>
      <div className="flex items-center justify-center p-4 bg-[var(--mainBackground)] sm:p-8 sm:bg-transparent">
        {children}
      </div>
      <Footer />
    </div>
  );
};
