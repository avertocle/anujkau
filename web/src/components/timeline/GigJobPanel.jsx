import {useState} from 'react';
import {JobExpandChip, JobRoleProgressionChip} from './common/JobComponents.jsx';
import {ReferenceCard} from './common/ReferencesPanel.jsx';
import {GetBgByThemeColor, GetHeaderBgByThemeColor, GetTextByThemeColor} from './CompanyThemeHelpers.jsx';
import {SvgIcon} from '../SmallCommons.jsx';
import CompanyLogos from '../../assets/companies/CompanyImages.js';

export default function GigJobPanel({content, canExpandInPlace, isCollapsedOrig, onClickSelect}) {
    const [isCollapsed, setIsCollapsed] = useState(isCollapsedOrig);

    function handleToggleCollapsed() {
        console.log('toggling collapsed');
        setIsCollapsed(!isCollapsed);
    }

    let childData = {
        content: content,
        isCollapsed: isCollapsed,
        onClickSelect: onClickSelect,
        onToggleCollapsed: handleToggleCollapsed,
        canExpandInPlace: canExpandInPlace,
    }

    const textColor = GetTextByThemeColor(content.theme.color);
    return (
        <GigPanelLayout data={childData}>
            <div className="flex flex-col gap-6">
                <GigHeaderSection content={content} theme={content.theme}/>
                {!isCollapsed
                    && (
                        <div className="flex flex-col w-full gap-2 font-light">
                            <p>{content.long_desc.text}</p>
                            <div className="flex flex-col w-full">
                                {content.works.map((work, index) => (
                                    <div className="flex gap-2 items-center rounded-md" key={`gig-work-${index}`}>
                                        <p className="flex p-0.5 items-center font-light text-sm">{work.text.repeat(3)}</p>
                                    </div>
                                ))}
                            </div>
                            <p className={`w-full text-center px-2 ${textColor}`}>References</p>
                            <div className="flex w-full items-center gap-10 justify-center">
                                {content.references.map((reference, index) => <ReferenceCard reference={reference}
                                                                                             key={`reference-${index}`}/>)}
                            </div>
                        </div>
                    )}
            </div>
        </GigPanelLayout>
    );
}

function GigPanelLayout({
                            content,
                            isCollapsed,
                            onClickSelect,
                            onToggleCollapsed,
                            canExpandInPlace,
                            children,
                        }) {
    const {time, theme} = content;
    const bgColor = GetBgByThemeColor(theme.color);
    return (
        <div className={`flex flex-col w-full h-fit pl-4 pb-4 gap-2 rounded-b-md rounded-t-md ${bgColor}`}>
            <GigTimeChip time={time} theme={theme}/>
            <div className={`flex flex-col w-full p-4 gap-4 rounded-md ${bgColor}`}>
                <div className="" onClick={onClickSelect}>
                    {children}
                </div>
                {canExpandInPlace &&
                    <JobExpandChip
                        isCollapsed={isCollapsed}
                        theme={theme}
                        onClick={onToggleCollapsed}
                    />
                }
            </div>
        </div>
    );
}

export function GigHeaderSection({content, theme}) {
    const textColor = GetTextByThemeColor(theme.color);
    return (
        <div className="flex gap-4 w-full justify-between">
            <div className="flex flex-col gap-1">
                <div className="flex gap-4 items-center">
                    <SvgIcon
                        src={CompanyLogos[content.company.logo]}
                        alt="logos"
                        className="flex max-w-20 max-h-6 rounded-md"
                    />
                </div>
                <div>
                    <JobRoleProgressionChip progression={content.progression} theme={theme}/>
                </div>
            </div>
        </div>
    );
}

export function GigTimeChip({time, theme}) {
    const bgColor = GetHeaderBgByThemeColor(theme.color);
    const textColor = GetTextByThemeColor(theme.color);
    return (
        <div className="flex w-full justify-end">
            <div
                className={`flex w-fit px-4 py-1 ${bgColor} ${textColor} bg-opacity-20  rounded-t-md text-xs`}
            >
                <div className="mr-10">
                    <p>{time.duration}</p>
                </div>
                <div className="flex gap-2">
                    <p>{time.start}</p>
                    <p>-</p>
                    <p>{time.end}</p>
                </div>
            </div>
        </div>
    );
}


// export function GigHeaderSection({content, theme}) {
//     const textColor = GetTextByThemeColor(theme.color);
//     return (
//         <div className="flex gap-4 w-full justify-between">
//             <div className="flex flex-col gap-1">
//                 <div className="flex gap-4 items-center">
//                     <SvgIcon
//                         src={CompanyLogos[content.company.logo]}
//                         alt="logos"
//                         className="flex max-w-20 max-h-6 rounded-md"
//                     />
//                 </div>
//                 <div className="flex gap-2 font-extralight items-center">
//                     <p className={`${textColor}`}>{content.company.name}</p>
//                     <p className="">{content.company.commitment}</p>
//                     <p className="">{content.company.location}</p>
//                 </div>
//                 <div>
//                     <ProgressionChip progression={content.progression} theme={theme}/>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export function GigTimeChip({time, theme}) {
//     const bgColor = GetHeaderBgByThemeColor(theme.color);
//     const textColor = GetTextByThemeColor(theme.color);
//     return (
//         <div className="flex w-full justify-end">
//             <div
//                 className={`flex w-fit px-4 py-1 ${bgColor} ${textColor} bg-opacity-20  rounded-t-md text-xs`}
//             >
//                 <div className="mr-10">
//                     <p>{time.duration}</p>
//                 </div>
//                 <div className="flex gap-2">
//                     <p>{time.start}</p>
//                     <p>-</p>
//                     <p>{time.end}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
