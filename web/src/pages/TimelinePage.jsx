import TimelinePanel from "../components/TimelinePanel.jsx";
import TimelineData from "../assets/content/timeline.json";
import {FaTimeline} from "react-icons/fa6";

function TimelinePage() {
    const timelineData = TimelineData
    return (
        <div className="flex flex-col w-full">
            {/*<TimelineHeader/>*/}
            {TimelineData.map((data, index) => {
                return <TimelinePanel data={data} key={`tl-${index}`}/>
            })}
        </div>
    );
};

export default TimelinePage;


function TimelineHeader() {
    return (
        <div className="flex p-4 gap-10 justify-between">
            <FaTimeline className="text-primary"/>
            <FaTimeline className="text-primary"/>
            <FaTimeline className="text-primary"/>
            <FaTimeline className="text-primary"/>
            <FaTimeline className="text-primary"/>
            <FaTimeline className="text-primary"/>
        </div>
    )
}


