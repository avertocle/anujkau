function PlaceholderPanel(props) {
    return (
                <div className="flex flex-col gap-6 items-center w-full py-16 text-primary ">
                    <h2 className="font-extrabold text-4xl ">{props.heading}</h2>
                    <div className="">
                        <img src={props.image} alt="Under Construction" className="w-48 h-48" />
                    </div>
                    <p className="text-lg font-extralight">
                        {props.message}
                    </p>
                </div>
    );
};

export default PlaceholderPanel;
