export function SectionLayout({title, children}) {
    return (
        <div className="flex flex-col p-2 w-full  rounded-md bg-primary/5">
            <p className="relative w-fit px-2 bottom-5 text-base font-semibold text-primary bg-white rounded-md  ">{title}</p>
            {children}
        </div>
    )
}

