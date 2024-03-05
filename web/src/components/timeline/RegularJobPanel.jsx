import {
  JobIntroSection, JobPanelCollapsed, JobPanelLayout, JobSectionLayout,
} from './BaseJobPanels.jsx';
import WorkSummaryPanel from './WorkSummaryPanel.jsx';
import ReferencesPanel from './ReferencesPanel.jsx';

export function RegularJobPanel({ content, isCollapsed, onClickSelect }) {
  return (
    isCollapsed
      ? <JobPanelCollapsed content={content} onClickSelect={onClickSelect} />
      : <RegularJobPanelExpanded content={content} isCollapsed={isCollapsed} onClickSelect={onClickSelect} />
  );
}

function RegularJobPanelExpanded({ content, isCollapsed, onClickSelect }) {
  return (
    <JobPanelLayout content={content} isCollapsed={isCollapsed} onClickSelect={onClickSelect}>
      <div className="flex flex-col w-full gap-4">
        <JobIntroSection content={content} isCollapsed={false} />
        <JobSectionLayout title="Work Summary" theme={content.theme}>
          <WorkSummaryPanel works={content.works} theme={content.theme} />
        </JobSectionLayout>
        <JobSectionLayout title="References" theme={content.theme}>
          <ReferencesPanel references={content.references} theme={content.theme} />
        </JobSectionLayout>
      </div>
    </JobPanelLayout>
  );
}
