export function NavbarButton({ title, icon, onClick, color }) {
    if (!color) {
        color = 'bg-primary text-white hover:bg-pri_dark1 active:bg-pri_dark2 ';
    }
    return (
        <button
            className={`${color} px-3 py-1 rounded-md flex items-center gap-1 active:scale-95`}
            onClick={onClick}
        >
            {icon}
            {title}
        </button>
    );
}

export function PrimaryButton({ label, onClick }) {
    return (
        <button className="w-full bg-primary text-white px-3 py-1 rounded-md active:scale-95" onClick={onClick}>
            {label}
        </button>
    );
}

export function SecondaryButton({ label, onClick, color }) {
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
