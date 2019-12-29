export default lang => (key, vars) => {
    const translation = lang[key];

    if(!translation)
        return key || '';

    return vars ? injectVars(translation, vars) : translation;
}

const injectVars = (translation, vars) => {
    const entries = Object.entries(vars);
    const replace = (trans, [key, value]) => trans.replace(regExpOf(key), value);

    return entries.reduce(replace, translation);
};

const regExpOf = key => new RegExp(`{{${key}}}`, 'g');