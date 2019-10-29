import React from 'react';
import Type from 'prop-types';

const Triangle = ({x = 0, y = 0, size, ...props}) => {
    const l = size - x - x;

    const first = {x, y};
    const second = {x: x + l, y};
    const third = {x: x + l / 2, y: y + Math.sqrt(3) / 2 * l};

    return <polygon points={`${first.x},${first.y} ${second.x},${second.y} ${third.x},${third.y}`} {...props}/>;
};

Triangle.propTypes = {
    x: Type.number,
    y: Type.number,
    size: Type.number
};

export default Triangle;