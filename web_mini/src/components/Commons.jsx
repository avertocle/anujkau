import { HiXCircle } from 'react-icons/hi2';

export const Text = ({value}) => {
    return <p>
        {value}
    </p>
}

export const ListItem = ({value}) => {
    return (
        <div className="flex gap-2 w-full">
            <div className="mt-1">
                <HiXCircle className="min-w-3 h-2 fill-primary-600"/>
            </div>
            <p>{value}</p>
        </div>
    );
}

export const Heading = ({value}) => {
    return <p className="text-primary-600 font-semibold">
        {value}
    </p>
}

export const Designation = ({titles}) => {
    return <p className="font-semibold">
        {titles.length > 1 ? `${titles[0]} → ${titles[1]}` : `${titles[0]}`}
    </p>
}

export const Duration = ({value}) => {
    return <p className="font-light italic">
        {value}
    </p>
}

export const filterByKeys = (obj, keys) => {
    return Object.values(Object.keys(obj)
        .filter(key => keys.includes(key))
        .reduce((acc, key) => {
            acc[key] = obj[key];
            return acc;
        }, {}));
}
