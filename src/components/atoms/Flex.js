import styled from "styled-components";
import Type from "prop-types";

const Flex = styled.div`
    display: flex;
    ${props => props.direction && `flex-direction: ${props.direction}`}
    ${props => props.align && `align-items: ${props.align}`}
    ${props => props.justify && `justify-content: ${props.justify}`}
`;

Flex.propTypes = {
    direction: Type.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
    align: Type.oneOf(['center', 'flex-start', 'flex-end']),
    justify: Type.oneOf(['flex-start', 'flex-end', 'space-between', 'space-around']),
};

export default Flex;