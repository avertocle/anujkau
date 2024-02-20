import {useState} from "react";

function TimelinePanel(props) {
    const [collapsed, setCollapsed] = useState(true)

    function toggleCollapsed() {
        setCollapsed(!collapsed)
        console.log(collapsed)
    }

    let childData = {
        data: props.data,
        handlers: {
            toggle_collapsed: toggleCollapsed
        }
    }

    return (
        <div className="flex w-full">
            {collapsed ? <TimelineCardCollapsed data={childData}/> : <TimelineCardExpanded data={childData}/>}
        </div>
    )
}

export default TimelinePanel;

function TimelineCardExpanded(props) {
    let data = props.data
    return (
        <div
            className="flex flex-col w-full p-4 gap-4 border border-primary border-opacity-25 rounded-md cursor-pointer"
        >
            <TimelineCardHeader data={data}/>
            <div
                className="flex flex-col w-full p-4 gap-4 border border-primary border-opacity-25 rounded-md cursor-pointer"
                onClick={props.data.handlers.toggle_collapsed}
            >

            </div>

        </div>
    )
}

function TimelineCardCollapsed(props) {
    return (
        <div
            className="flex w-full p-4 gap-4 border border-primary border-opacity-50 rounded-md cursor-pointer"
            onClick={props.data.handlers.toggle_collapsed}
        >
            <TimelineCardHeader data={data}/>


        </div>
    )
}

function TimelineCardHeader(props) {
    let data = props.data
    return (
        <div className="flex min-w-[40%] p-2 justify-between">
            <div>
                <p>{data.time.duration}</p>
            </div>
            <div className="flex gap-2">
                <p>{data.time.start}</p>
                <p>"-"</p>
                <p>{data.time.end}</p>
            </div>
        </div>
    )
}


