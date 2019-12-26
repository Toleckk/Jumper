export const getLang = async lang => {
    const response = await fetch(`/locals/${lang}.json`).catch(console.error);
    return response.json();
};

export const makeFlat = lang => Object.entries(lang).reduce(
    (acc, [key, value]) => {
        if (typeof value === 'string')
            return {...acc, [key]: value};
        else if (typeof value === 'object')
            return {...acc, ...makeFlat(value)};
        return acc;
    }, {}
);