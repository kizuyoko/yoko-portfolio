import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ 
  children, 
  isContact 
}: { 
  children: React.ReactNode, 
  isContact?: boolean;
}) => {
  return (
    <div className="defaultLayout">
      <Header />
      <main className={`flex flex-col flex-1 w-full sm:mt-1 max-w-screen-xl gap-6 mx-auto ${!isContact ? "sm:flex-row-reverse" : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
