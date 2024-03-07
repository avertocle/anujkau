import TimelinePanelSm from '../components/timeline/sm/TimelinePanelSm.jsx';
import TimelineData from '../assets/content/timeline.json';
import TimelinePanelLg from '../components/timeline/lg/TimelinePanelLg.jsx';

function TimelinePage() {
    return (
        <div className="flex h-fit w-full gap-10 pl-2">
            <div className="flex lg:hidden ">
                <TimelinePanelSm data={TimelineData}/>
            </div>
            <div className="hidden lg:flex lg:visible ">
                <TimelinePanelLg data={TimelineData}/>
            </div>
        </div>
    );
}

export default TimelinePage;
