import RegularJobCard from '../RegularJobCard.jsx';
import ConsultingJobCardSm from "./ConsultingJobCardSm.jsx";
import {LayoutTypes} from "../common/props.js";

function TimelinePanelSm(props) {
    const data = props.data;

    function getCard(index) {
        const content = data[index];
        const {type} = content;
        const childData = {
            content: content,
            default_layout: LayoutTypes.COLLAPSED,
            isCollapsedOrig: true,
            canExpandInPlace: true,
            key: `tpsm-job-card-${index}`,
        };
        if (type === 'consulting') {
            return <ConsultingJobCardSm data={childData} key={`tpsm-cjob-card-${index}`}/>;
        } else {
            return <RegularJobCard {...childData} />;
        }
    }

    return (
        <div
            className="flex flex-col w-full gap-6 pr-2 h-[calc(100vh-180px)] overflow-y-scroll">
            {props.data.map((data, index) => getCard(index))}
        </div>
    );
}

export default TimelinePanelSm;
