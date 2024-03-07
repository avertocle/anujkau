export function SectionLayout({ title, children }) {
  return (
    <div className="flex flex-col p-2 w-full rounded-md bg-accent/10">
      <p className="relative w-fit px-2 bottom-5 text-base text-accent font-semibold bg-white rounded-md">{title}</p>
      {children}
    </div>
  );
}
