import {JobHeaderSection, JobIntroSection, JobPanelLayout, JobSectionLayout,} from "./BaseJobPanels.jsx";
import {GetBgByThemeColor, GetTextByThemeColor} from "../CompanyThemeHelpers.jsx";
import TimelinePanel from "../TimelinePanel.jsx";
import WorkSummaryPanel from "./WorkSummaryPanel.jsx";
import ReferencesPanel from "./ReferencesPanel.jsx";
import {useState} from "react";
import GigJobPanel from "./GigJobPanel.jsx";

export function ConsultingJobPanel(props) {
    let data = props.data
    let content = props.data.content
    const [selectedGigIdx, setSelectedGigIdx] = useState(0)
    const gigs = content.gigs
    const selectedGig = gigs[selectedGigIdx]

    function handleGigSelected(idx) {
        setSelectedGigIdx(idx)
    }

    return (
        <JobPanelLayout data={data} theme={content.theme}>
            <div className="flex flex-col gap-8">
                <JobIntroSection content={content} isCollapsed={false}/>
                <GigsPanel gigs={content.gigs} theme={content.theme}/>
            </div>
        </JobPanelLayout>
    )
}


function GigsPanel(props) {
    return (
        <div className='flex flex-col w-full py-4 gap-8'>
            {props.gigs.map((gig, index) => {
                return <GigJobPanel data={gig} key={`gig-${index}`}/>
            })}
        </div>
    )
}

function GigCard(props) {
    let gig = props.data
    let bgColor = GetBgByThemeColor(props.theme.color)
    let textColor = GetTextByThemeColor(props.theme.color)
    return (
        <div className={`flex flex-col gap-2 p-2 items-center ${bgColor}`}>
            <JobHeaderSection content={gig} theme={gig.theme}/>
            <p className="flex p-0.5 items-center font-light text-sm">{gig.short_desc.text.repeat(1)}</p>
            <JobSectionLayout title="Highlights" theme={gig.theme}>
                <WorkSummaryPanel works={gig.works} theme={gig.theme}/>
            </JobSectionLayout>
            <JobSectionLayout title="References" theme={gig.theme}>
                <ReferencesPanel references={gig.references} theme={gig.theme}/>
            </JobSectionLayout>
        </div>
    )
}
