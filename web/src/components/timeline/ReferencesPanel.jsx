import {SiLinkedin} from "react-icons/si";

export default function ReferencesPanel({references}) {
    return (
        <div className='flex w-full items-center gap-10 justify-center'>
            {references.map((reference, index) => {
                return <ReferenceCard reference={reference} key={`reference-${index}`}/>
            })}
        </div>
    )
}

export function ReferenceCard({reference}) {
    return (
        <div className='flex flex-col gap-1 p-2 hover:bg-accent/20 rounded-md'
             onClick={() => window.open(reference.link, '_blank')}
        >
            <div className="flex gap-2 items-center justify-center">
                <SiLinkedin className="flex h-4 w-4 text-blue-700/80"/>
                <p>{reference.name}</p>
            </div>
            <p className="text-xs font-extralight">{reference.title}</p>
        </div>
    )
}
