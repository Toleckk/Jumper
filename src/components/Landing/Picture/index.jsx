import React from 'react';
import Container from "./Container";
import Triangle from "../../atoms/Triangle";
import SVG from "./SVG";

const Picture = ({size = 24}) => <Container>
    <SVG viewBox={`0 0 ${size} ${size}`}>
        <Triangle x={1} y={1} size={size} stroke="rgba(166, 69, 86, 0.35)" fill="transparent" strokeWidth={0.8}/>
        <Triangle x={3.4} y={2.4} size={size} stroke="rgba(166, 69, 86, 0.3)" fill="transparent" strokeWidth={0.8}/>
    </SVG>
</Container>;

export default Picture;