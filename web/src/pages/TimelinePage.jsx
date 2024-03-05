import TimelinePanelSingleCol from '../components/TimelinePanelSingleCol.jsx';
import TimelineData from '../assets/content/timeline.json';
import TimelinePanelDoubleCol from '../components/TimelinePanelDoubleCol.jsx';

function TimelinePage() {
  return (
    <div className="flex h-fit w-full gap-10 pl-2">
      <div className="flex lg:hidden ">
        <TimelinePanelSingleCol data={TimelineData} />
      </div>
      <div className="hidden lg:flex lg:visible ">
        <TimelinePanelDoubleCol data={TimelineData} />
      </div>
    </div>
  );
}

export default TimelinePage;
