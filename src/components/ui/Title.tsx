export function Title({ children, homeLayout }: { children: React.ReactNode; homeLayout?: boolean }) {
  return (
    <>
      {homeLayout ? (
        <>
          <h1 className="">
            {children}
          </h1>
          <div className="w-30 h-1 bg-[var(--color-title-underline)] my-8"></div>
        </>
      ) : (
        <div className="inline-block border-b-[4px] mb-4 border-[var(--color-title-underline)]">
          <h1 className="">
            {children}
          </h1>
        </div>
      )}
    </>
  );
}