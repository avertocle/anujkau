import {GetBgByThemeColor, GetTextByThemeColor} from '../../CompanyThemeHelpers.jsx';

export default function WorkSummaryPanel(props) {
    return (
        <div className="flex flex-col w-full py-1 gap-2">
            {props.works.map((work, index) => <WorkCard work={work} theme={props.theme} key={`work-${index}`}/>)}
        </div>
    );
}

function WorkCard({work, theme}) {
    const bgColor = GetBgByThemeColor(theme.color);
    const textColor = GetTextByThemeColor(theme.color);
    return (
        <div className={`flex gap-1 p-1 items-center ${bgColor} rounded-md`}>
            <p className="flex p-0.5 items-center font-light text-sm">{work.text.repeat(3)}</p>
        </div>
    );
}
