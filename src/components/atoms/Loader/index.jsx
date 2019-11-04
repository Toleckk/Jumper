import React from 'react';
import Container from "./Container";
import First from "./First";
import Second from "./Second";
import Type from "prop-types";

const Loader = props => <Container>
    <First {...props}/>
    <Second {...props}/>
</Container>;

Loader.defaultProps = {
    size: 30,
    bold: 15
};

Loader.propTypes = {
    size: Type.number,
    bold: Type.number
};

export default Loader;