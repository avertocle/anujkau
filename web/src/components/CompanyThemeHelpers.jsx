export function GetHeaderBgByThemeColor(themeColor) {
    switch (themeColor) {
        case 'green':
            return 'bg-green-700'
        case 'blue':
            return 'bg-blue-500'
        case 'cyan':
            return 'bg-cyan-700'
        case 'amber':
            return 'bg-amber-600'
        case 'yellow':
            return 'bg-yellow-500'
        case 'gray':
            return 'bg-gray-700'
        case 'purple':
            return 'bg-purple-700'
        case 'pink':
            return 'bg-pink-700'
        case 'teal':
            return 'bg-teal-700'
        default:
            return 'bg-gray-700'
    }
}


export function GetBgByThemeColor(themeColor) {
    switch (themeColor) {
        case 'green':
            return 'bg-green-700/5'
        case 'blue':
            return 'bg-blue-500/10'
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
        case 'pink':
            return 'bg-pink-700/5'
        case 'teal':
            return 'bg-teal-700/5'
        default:
            return 'bg-gray-700/5'
    }
}

export function GetTextByThemeColor(themeColor) {
    switch (themeColor) {
        case 'green':
            return 'text-green-700'
        case 'blue':
            return 'text-blue-500'
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
        case 'pink':
            return 'text-pink-700/5'
        case 'teal':
            return 'text-teal-700/5'
        default:
            return 'text-gray-700'
    }
}
