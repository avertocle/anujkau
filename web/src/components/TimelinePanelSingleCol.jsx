import {ConsultingJobPanel} from './timeline/ConsultingJobPanel.jsx';
import {RegularJobPanel} from './timeline/RegularJobPanel.jsx';

function TimelinePanelSingleCol(props) {

    function getPanel(index) {
        const content = props.data[index];
        const {type} = content;
        const childData = {
            content: content,
            canExpandInPlace: true,
            onClickSelect: (() => {
                console.log('TimelinePanelSingleCol : onClickSelect');
            }),
            key: `single-col-job-card-${index}`,
        };
        if (type === 'consulting') {
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
