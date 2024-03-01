import TimelinePanel from "../components/TimelinePanel.jsx";
import TimelineData from "../assets/content/timeline.json";

function TimelinePage() {
    const timelineData = TimelineData
    return (
        <div className="lg:grid lg:grid-cols-1 lg:w-[40%] h-fit flex flex-col w-full gap-10 pl-2">
            {TimelineData.map((data, index) => {
                return <TimelinePanel data={data} key={`tl-${index}`}/>
            })}
        </div>
    );
};

export default TimelinePage;
