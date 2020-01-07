import React from 'react';
import Type from "prop-types";
import Container from "./Container";
import First from "./First";
import Second from "./Second";

const Loader = ({background, ...props}) => <Container background={background}>
    <First {...props}/>
    <Second {...props}/>
</Container>;

Loader.defaultProps = {
    size: 30,
    bold: 15,
    background: 'primary',
    shadow: true,
};

Loader.propTypes = {
    size: Type.number,
    bold: Type.number,
    background: Type.oneOf(['dark', 'lite', 'primary']),
    shadow: Type.bool,
};

export default Loader;