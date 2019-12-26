export default (onDown, onUp) => {
    return [
        event => (event.key === ' ' || event.key === 'Enter') && onDown(event),
        event => (event.key === ' ' || event.key === 'Enter') && onUp(event),
    ];
};