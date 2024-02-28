import {SvgIcon} from "../SmallCommons.jsx";
import CompanyLogos from "../../assets/companies/CompanyImages.js";
import {BaseJobPanelLayout} from "./BaseJobPanels.jsx";

export function ConsultingPanelExpanded(props) {
    let data = props.data
    let content = props.data.content
    return (
        <BaseJobPanelLayout data={data} theme={content.theme}>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 w-full">
                    <SvgIcon
                        src={CompanyLogos[content.company.logo]}
                        alt={'logos'}
                        className={`flex p-2 w-24 h-12 rounded-md border border-opacity-20`}/>
                    <div>
                        <p className={`flex text-lg`}>{content.company.name}</p>
                        <div className="flex gap-4 font-extralight italic text-xs">
                            <p>{content.company.location}</p>
                            <p>{content.progression.join(' / ')}</p>
                        </div>
                    </div>
                </div>
                <p className="flex w-full text-start text-content mt-2">{content.long_desc.text}</p>
                <WorksPanel works={content.works}/>
                <ReferencesPanel references={content.references}/>
            </div>
        </BaseJobPanelLayout>
    )
}