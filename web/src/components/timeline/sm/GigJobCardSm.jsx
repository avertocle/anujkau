import {LayoutTypes} from "../common/props.js";
import GigJobCardSmCollapsed from "./GigJobCardSmCollapsed.jsx";
import GigJobCardSmExpanded from "./GigJobCardSmExpanded.jsx";

function GigJobCardSm(props) {
    const data = props.data;
    const layout = data.default_layout;
    if (layout === LayoutTypes.COLLAPSED) {
        return <GigJobCardSmCollapsed data={data}/>;
    } else {
        return <GigJobCardSmExpanded data={data}/>;
    }
}

export default GigJobCardSm;
