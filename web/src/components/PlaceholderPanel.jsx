function PlaceholderPanel(props) {
    return (
        <div
            className="flex flex-col gap-6 items-center w-full py-16 text-primary border border-primary rounded-md opacity-30 ">
            <h2 className="text-lg ">{props.heading}</h2>
            <div className="">
                {props.icon}
            </div>
            <p className="font-extralight">
                {props.message}
            </p>
        </div>
    );
};

export default PlaceholderPanel;
