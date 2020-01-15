import React from 'react';
import Type from "prop-types";
import DecorativeAlpha from "./DecorativeAlpha";
import Container from "./Container";

const Description = ({description}) => {
    const [first, ...rest] = [...description];
    return <Container>
        <DecorativeAlpha>{first}</DecorativeAlpha>
        {rest.join('')}
    </Container>;
}

Description.propTypes = {
    description: Type.string.isRequired
};

export default React.memo(Description);