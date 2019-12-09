export default lang => (key, vars = {}) => {
    return (lang[key] || key || '').replace(/{{(.+?)}}/g, (zero, one) => vars[one] || zero);
}