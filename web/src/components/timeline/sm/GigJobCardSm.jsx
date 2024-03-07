function GigJobCardSm(props) {

    if (props.isCollapsed) {
        return <GigJobCardSmCollapsed {...props} />;
    } else {
        return <GigJobCardSmExpanded {...props} />;
    }
}

export default GigJobCardSm;



