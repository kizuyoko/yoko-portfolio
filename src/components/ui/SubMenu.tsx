export const SubMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="sm:sticky sm:right-0 sm:max-w-1/4 sm:mr-8 sm:mt-8">
      <div className="sub-menu sm:sticky sm:top-8">
        {children}
      </div>
    </aside>
  );
};