type Mods = Record<string, boolean | string>

export function classNames (
    cls: string, 
    mods: Mods = {}, 
    additional: string[] = [], 
    square?: boolean
): string {
    if (square) {
        console.log('ButtonTheme2', additional, ...additional.filter(Boolean) );
    }
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}
