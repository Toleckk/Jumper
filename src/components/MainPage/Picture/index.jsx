import React, {useContext} from 'react';
import Container from "./Container";
import Triangle from "../../atoms/Triangle";
import SVG from "./SVG";
import {ThemeContext} from "styled-components";
import Type from 'prop-types';

const Picture = ({size}) => {
    const {accents} = useContext(ThemeContext);
    const triangleProps = {size, fill: "transparent", strokeWidth: 0.8};

    return <Container>
        <SVG viewBox={`0 0 ${size} ${size}`}>
            <Triangle x={1} y={1} stroke={`rgba(${accents}, 0.35)`} {...triangleProps}/>
            <Triangle x={3.4} y={2.4} stroke={`rgba(${accents}, 0.3)`} {...triangleProps}/>
        </SVG>
    </Container>;
};

Picture.defaultProps = {
    size: 24
};

Picture.propTypes = {
    size: Type.number
};

export default Picture;