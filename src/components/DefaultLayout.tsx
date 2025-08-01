import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--mainBackground)] ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
