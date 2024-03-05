import {
  GetBgByThemeColor,
  GetBorderByThemeColor,
  GetHeaderBgByThemeColor,
  GetTextByThemeColor,
} from '../CompanyThemeHelpers.jsx';
import { SvgIcon } from '../SmallCommons.jsx';
import CompanyLogos from '../../assets/companies/CompanyImages.js';

export function JobPanelCollapsed({ content, onClickSelect }) {
  return (
    <JobPanelLayout content={content} isCollapsed onClickSelect={onClickSelect}>
      <JobIntroSection content={content} isCollapsed />
    </JobPanelLayout>
  );
}

export function JobPanelLayout({
  content, isCollapsed, onClickSelect, children,
}) {
  const { time } = content;
  const { theme } = content;
  const bgColor = GetBgByThemeColor(theme.color);
  console.log(onClickSelect);
  return (
    <div className={`flex flex-col w-full h-fit pl-4 pb-4 gap-2 rounded-b-md rounded-t-md ${bgColor}`}>
      <JobTimeChip time={time} theme={theme} />
      <div className="flex flex-col pr-4 gap-4">
        {children}
        {onClickSelect && <JobExpandChip isCollapsed={isCollapsed} theme={theme} onClick={onClickSelect} />}
      </div>
    </div>
  );
}

export function JobIntroSection({ content, isCollapsed }) {
  const text = isCollapsed ? content.short_desc.text : content.long_desc.text;
  return (
    <div className="flex flex-col gap-2">
      <JobHeaderSection content={content} theme={content.theme} />
      <p className="flex w-full text-start text-content mt-2">{text}</p>
    </div>
  );
}

export function JobHeaderSection({ content, theme }) {
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
          className="flex max-w-30 max-h-8 rounded-md"
        />
      </div>
    </div>
  );
}

export function JobSectionLayout({ title, children, theme }) {
  const bgColor = GetBgByThemeColor(theme.color);
  const textColor = GetTextByThemeColor(theme.color);
  return (
    <div className="flex flex-col gap-1 w-full justify-center items-center">
      <p className={`w-full text-center px-2 ${textColor}`}>
        ~
        {title}
        {' '}
        ~
      </p>
      {children}
    </div>
  );
}

export function JobExpandChip({ isCollapsed, theme, onClick }) {
  const bgColor = GetBgByThemeColor(theme.color);
  const textColor = GetTextByThemeColor(theme.color);
  const borderColor = GetBorderByThemeColor(theme.color);
  return (
    <div
      className="flex mt-auto w-full justify-end cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`flex w-fit px-4 py-0.5 text-xs font-light ${textColor} border ${borderColor} border-opacity-50 rounded-md`}
      >
        <p>{isCollapsed ? '... More ...' : '... Less ...'}</p>
      </div>
    </div>
  );
}

export function JobTimeChip({ time, theme }) {
  const bgColor = GetHeaderBgByThemeColor(theme.color);
  return (
    <div className="flex w-full justify-end">
      <div
        className={`flex w-fit px-4 py-1 justify-between ${bgColor} rounded-bl-md rounded-tr-md text-white text-xs`}
      >
        <div className="mr-10 font-semibold">
          <p>{time.duration}</p>
        </div>
        <div className="flex gap-2 font-light">
          <p>{time.start}</p>
          <p>-</p>
          <p>{time.end}</p>
        </div>
      </div>
    </div>
  );
}

export function ProgressionChip({ progression, theme }) {
  const borderColor = GetBorderByThemeColor(theme.color);
  const bgColor = GetHeaderBgByThemeColor(theme.color);
  return (
    <div className={`px-2 py-0.5 ${bgColor} text-white text-xs font-normal rounded-md`}>
      <p>{progression.join(' -> ')}</p>
    </div>
  );
}
