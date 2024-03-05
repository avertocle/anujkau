import { useState } from 'react';
import { ConsultingJobPanel } from './timeline/ConsultingJobPanel.jsx';
import { RegularJobPanel } from './timeline/RegularJobPanel.jsx';
import { JobPanelCollapsed } from './timeline/BaseJobPanels.jsx';

function TimelinePanelSingleCol(props) {
  const [expandedIdx, setExpandedIdx] = useState(-1);

  function handleSelectTile(index) {
    if (expandedIdx === index) {
      setExpandedIdx(-1);
    } else {
      setExpandedIdx(index);
    }
  }

  function getPanel(index) {
    const content = props.data[index];
    const isCollapsed = !(expandedIdx === index);
    const { type } = content;
    const childData = {
      content,
      isCollapsed,
      onClickSelect: (() => handleSelectTile(index)),
      key: `single-col-job-card-${index}`,
    };
    if (isCollapsed) {
      return <JobPanelCollapsed {...childData} />;
    } if (type === 'consulting') {
      return <ConsultingJobPanel {...childData} />;
    }
    return <RegularJobPanel {...childData} />;
  }

  return (
    <div className="flex flex-col w-full gap-6">
      {props.data.map((data, index) => getPanel(index))}
    </div>
  );
}

export default TimelinePanelSingleCol;

function TimelineGigPanel(props) {

}
