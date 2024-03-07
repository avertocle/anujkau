import {useState} from "react";
import {JobDurationChip, JobIntroSection} from "../common/JobComponents.jsx";
import {LayoutTypes} from "../common/props.js";
import {GetBgByThemeColor} from "../../CompanyThemeHelpers.jsx";
import GigJobCardSm from "./GigJobCardSm.jsx";

function ConsultingJobCardSm(props) {
    const data = props.data;
    const default_layout = data.default_layout //|| LayoutTypes.COLLAPSED;
    const [currLayout, setCurrLayout] = useState(default_layout);
    const [selectedGigCard, setSelectedGigCard] = useState(-1);

    function handleLayoutToggle() {
        if (currLayout === LayoutTypes.COLLAPSED) {
            setCurrLayout(LayoutTypes.EXPANDED);
        } else {
            setCurrLayout(LayoutTypes.COLLAPSED);
        }
    }

    function handleGigCardSelect(idx) {
        if (selectedGigCard === idx) {
            setSelectedGigCard(-1);
        } else {
            setSelectedGigCard(idx)
        }
    }

    function getCardByLayout(layout) {
        const childData = {
            content: data.content,
            selected_gig_card: selectedGigCard,
            handlers: {
                onGigCardSelect: handleGigCardSelect,
                onLayoutToggle: handleLayoutToggle,
            }
        };

        switch (layout) {
            case LayoutTypes.COLLAPSED:
                return <ConsultingJobPanelCollapsed data={childData}/>;
            case LayoutTypes.EXPANDED:
                return <ConsultingJobPanelExpanded data={childData}/>;
            default:
                console.error('ConsultingJobCardSm : getCardByLayout : invalid layout', layout);
        }
    }

    return getCardByLayout(currLayout);
}

export default ConsultingJobCardSm;


function ConsultingJobPanelExpanded(props) {
    const data = props.data;
    const {theme, time, gigs} = data.content;
    const {selected_gig_card} = data;
    let bgColor = GetBgByThemeColor(theme.color);

    return (
        <div className="flex flex-col gap-2">
            <div className={`flex flex-col w-full h-fit pl-4 pb-4 gap-2 rounded-b-md rounded-t-md ${bgColor}`}>
                <JobDurationChip time={time} theme={theme}/>
                <div className="flex flex-col pr-4 gap-4 cursor-pointer">
                    <div className={`flex w-full `} onClick={data.handlers.onLayoutToggle}>
                        <JobIntroSection content={data.content} isCollapsed={false}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-[90%] mx-auto">
                {gigs.map((gig, idx) => {
                    const childData = {
                        content: gig,
                        default_layout: selected_gig_card === idx ? LayoutTypes.EXPANDED : LayoutTypes.COLLAPSED,
                        handlers: {
                            onGigCardSelect: (() => data.handlers.onGigCardSelect(idx)),
                        },
                        key: `cjob-gig-card-${idx}`,
                    };
                    return <GigJobCardSm data={childData} key={`cjob-gig-card-${idx}`}/>
                })}
            </div>
        </div>
    );
}

export function ConsultingJobPanelCollapsed(props) {
    const data = props.data;
    const {theme, time} = data.content;
    let bgColor = GetBgByThemeColor(theme.color);
    return (
        <div className={`flex flex-col w-full h-fit pl-4 pb-4 gap-2 rounded-b-md rounded-t-md ${bgColor}`}>
            <JobDurationChip time={time} theme={theme}/>
            <div className="flex flex-col pr-4 gap-4">
                <div className="" onClick={data.handlers.onLayoutToggle}>
                    <JobIntroSection content={data.content} isCollapsed={true}/>
                </div>
            </div>
        </div>
    );
}

