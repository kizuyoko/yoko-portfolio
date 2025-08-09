import { Header } from "./Header";
import { Footer } from "./Footer";

export const HomeLayout = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`grid min-h-screen grid-rows-[auto_1fr_auto] homeLayout ${className ? className : ""}`}>
      <Header />
      <div className="hidden sm:block"></div>
      <div className="flex items-center justify-center">
        <main 
          className="flex flex-col items-center justify-center max-w-3xl p-0" 
          role-main="true"
          aria-label="Main content"
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};
