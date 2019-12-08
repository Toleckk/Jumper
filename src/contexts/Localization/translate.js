export default lang => (key, vars = {}) => {
    return (lang[key] || '').replace(/{{(.+?)}}/g, (zero, one) => vars[one] || zero);
}