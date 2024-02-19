export function PrimaryButton({label, onClick}) {
    return (
        <button className="w-full bg-primary text-white px-3 py-1 rounded-md active:scale-95" onClick={onClick}>
            {label}
        </button>
    );
}

export function SecondaryButton({label, onClick, color}) {
    if (!color) {
        color = 'secondary';
    }
    return (
        <button
            className={`w-full px-3 py-1 bg-${color} bg-opacity-10 text-${color} cursor-pointer
            border border-${color} rounded-md 
            hover:bg-opacity-80 hover:text-white active:opacity-80 active:scale-95 `}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export function SvgIcon({src, alt, className}) {
    return <img src={src} alt={alt} className={className}/>
}