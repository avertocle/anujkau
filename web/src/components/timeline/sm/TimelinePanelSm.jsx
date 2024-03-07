import RegularJobCard from '../RegularJobCard.jsx';
import ConsultingJobCardSm from "./ConsultingJobCardSm.jsx";
import {LayoutTypes} from "../common/props.js";

function TimelinePanelSm(props) {

    function getCard(index) {
        const content = props.data[index];
        const {type} = content;
        const childData = {
            content: content,
            default_layout: LayoutTypes.COLLAPSED,
            canExpandInPlace: true,
            onClickSelect: (() => {
                console.log('TimelinePanelSm : onClickSelect');
            }),
            key: `tpsm-job-card-${index}`,
        };
        if (type === 'consulting') {
            return <ConsultingJobCardSm data={childData} key={`tpsm-cjob-card-${index}`}/>;
        }
        return <RegularJobCard {...childData} />;
    }

    return (
        <div className="flex flex-col w-full gap-6 border-6 border-red-700">
            {props.data.map((data, index) => getCard(index))}
        </div>
    );
}

export default TimelinePanelSm;
