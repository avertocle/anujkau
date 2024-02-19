function PlaceholderPanel(props) {
    return (
        <div className="flex flex-col gap-6 items-center w-full py-16 text-primary border border-primary ">
            <h2 className="font-extrabold text-4xl ">{props.heading}</h2>
            <div className="">
                {props.icon}
            </div>
            <p className="text-lg font-extralight">
                {props.message}
            </p>
        </div>
    );
};

export default PlaceholderPanel;