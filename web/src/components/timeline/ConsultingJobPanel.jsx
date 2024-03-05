import { useState } from 'react';
import {
  JobIntroSection, JobPanelLayout, JobSectionLayout, ProgressionChip,
} from './BaseJobPanels.jsx';
import { GetBgByThemeColor, GetTextByThemeColor } from '../CompanyThemeHelpers.jsx';
import WorkSummaryPanel from './WorkSummaryPanel.jsx';
import ReferencesPanel from './ReferencesPanel.jsx';
import GigJobPanel from './GigJobPanel.jsx';
import { SvgIcon } from '../SmallCommons.jsx';
import CompanyLogos from '../../assets/companies/CompanyImages.js';

export function ConsultingJobPanel({ content, isCollapsed, onClickSelect }) {
  const [selectedGigIdx, setSelectedGigIdx] = useState(0);
  const { gigs } = content;
  const selectedGig = gigs[selectedGigIdx];

  function handleGigSelected(idx) {
    setSelectedGigIdx(idx);
  }

  return (
    <JobPanelLayout content={content} isCollapsed={isCollapsed} onClickSelect={onClickSelect}>
      <div className="flex flex-col gap-8">
        <JobIntroSection content={content} isCollapsed={false} />
        <GigsPanel gigs={content.gigs} theme={content.theme} />
      </div>
    </JobPanelLayout>
  );
}

function GigsPanel(props) {
  return (
    <div className="flex flex-col w-full py-4 gap-8">
      {props.gigs.map((gig, index) => <GigJobPanel data={gig} key={`gig-${index}`} />)}
    </div>
  );
}

function GigCard(props) {
  const gig = props.data;
  const bgColor = GetBgByThemeColor(props.theme.color);
  const textColor = GetTextByThemeColor(props.theme.color);
  return (
    <div className={`flex flex-col gap-2 p-2 items-center ${bgColor}`}>
      <GigHeaderSection content={gig} theme={gig.theme} />
      <p className="flex p-0.5 items-center font-light text-sm">{gig.short_desc.text.repeat(1)}</p>
      <JobSectionLayout title="Highlights" theme={gig.theme}>
        <WorkSummaryPanel works={gig.works} theme={gig.theme} />
      </JobSectionLayout>
      <JobSectionLayout title="References" theme={gig.theme}>
        <ReferencesPanel references={gig.references} theme={gig.theme} />
      </JobSectionLayout>
    </div>
  );
}

export function GigHeaderSection({ content, theme }) {
  const textColor = GetTextByThemeColor(theme.color);
  return (
    <div className="flex gap-4 w-full justify-between">
      <div className="flex flex-col gap-1">
        <p className={`flex ${textColor} text-lg`}>{content.company.name}</p>
        <div className="flex gap-4 font-extralight text-xs">
          <ProgressionChip progression={content.progression} theme={theme} />
          <p>{content.company.location}</p>
        </div>
      </div>
      <div className="flex items-end">
        <SvgIcon
          src={CompanyLogos[content.company.logo]}
          alt="logos"
          className="flex max-w-15 max-h-4 rounded-md"
        />
      </div>
    </div>
  );
}
