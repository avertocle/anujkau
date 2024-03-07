import {GetBgByThemeColor, GetTextByThemeColor} from "../../CompanyThemeHelpers.jsx";
import {JobDurationChip, JobExpandChip} from "./JobComponents.jsx";

export function JobPanelLayout({
                                   content,
                                   isCollapsed,
                                   onClickSelect,
                                   onToggleCollapsed,
                                   canExpandInPlace,
                                   children,
                               }) {
    const {time, theme} = content;
    const bgColor = GetBgByThemeColor(theme.color);
    return (
        <div className={`flex flex-col w-full h-fit pl-4 pb-4 gap-2 rounded-b-md rounded-t-md ${bgColor}`}>
            <JobDurationChip time={time} theme={theme}/>
            <div className="flex flex-col pr-4 gap-4">
                <div className="" onClick={onClickSelect}>
                    {children}
                </div>
                {canExpandInPlace &&
                    <JobExpandChip
                        isCollapsed={isCollapsed}
                        theme={theme}
                        onClick={onToggleCollapsed}
                    />
                }
            </div>
        </div>
    );
}

export function JobSectionLayout({title, children, theme}) {
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

