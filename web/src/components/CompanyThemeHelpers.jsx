
export function GetHeaderStyleByThemeColor(themeColor) {
    switch (themeColor) {
        case 'green':
            return 'flex w-fit px-4 py-1 justify-between bg-green-700 rounded-t-md text-white text-xs'
        case 'cyan':
            return 'flex w-fit px-4 py-1 justify-between bg-cyan-700 rounded-t-md text-white text-xs'
        case 'amber':
            return 'flex w-fit px-4 py-1 justify-between bg-amber-600 rounded-t-md text-white text-xs'
        case 'yellow':
            return 'flex w-fit px-4 py-1 justify-between bg-yellow-700 rounded-t-md text-white text-xs'
        case 'gray':
            return 'flex w-fit px-4 py-1 justify-between bg-gray-700 rounded-t-md text-white text-xs'
        case 'purple':
            return 'flex w-fit px-4 py-1 justify-between bg-purple-700 rounded-t-md text-white text-xs'
        default:
            return 'flex w-fit px-4 py-1 justify-between bg-gray-700 rounded-t-md text-white text-xs'
    }
}
