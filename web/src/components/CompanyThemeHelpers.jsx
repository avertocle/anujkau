export function GetHeaderStyleByThemeColor(themeColor) {
    switch (themeColor) {
        case 'green':
            return 'flex w-fit px-4 py-1 justify-between bg-green-700 rounded-t-md text-white text-xs'
        case 'cyan':
            return 'flex w-fit px-4 py-1 justify-between bg-cyan-700 rounded-t-md text-white text-xs'
        case 'amber':
            return 'flex w-fit px-4 py-1 justify-between bg-amber-600 rounded-t-md text-white text-xs'
        case 'yellow':
            return 'flex w-fit px-4 py-1 justify-between bg-yellow-600 rounded-t-md text-white text-xs'
        case 'gray':
            return 'flex w-fit px-4 py-1 justify-between bg-gray-700 rounded-t-md text-white text-xs'
        case 'purple':
            return 'flex w-fit px-4 py-1 justify-between bg-purple-700 rounded-t-md text-white text-xs'
        default:
            return 'flex w-fit px-4 py-1 justify-between bg-gray-700 rounded-t-md text-white text-xs'
    }
}


export function GetBgByThemeColor(themeColor) {
    switch (themeColor) {
        case 'green':
            return 'bg-green-700/5'
        case 'cyan':
            return 'bg-cyan-700/5'
        case 'amber':
            return 'bg-amber-600/5'
        case 'yellow':
            return 'bg-yellow-500/10'
        case 'gray':
            return 'bg-gray-700/5'
        case 'purple':
            return 'bg-purple-700/5'
        default:
            return 'bg-gray-700/5'
    }
}

export function GetTextByThemeColor(themeColor) {
    switch (themeColor) {
        case 'green':
            return 'text-green-700'
        case 'cyan':
            return 'text-cyan-700'
        case 'amber':
            return 'text-amber-600'
        case 'yellow':
            return 'text-yellow-600'
        case 'gray':
            return 'text-gray-700'
        case 'purple':
            return 'text-purple-700'
        default:
            return 'text-gray-700'
    }
}
