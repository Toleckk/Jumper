import styled from "styled-components";
import Type from "prop-types";

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    align-items: ${props => props.align || 'initial'};
    justify-content: ${props => props.justify || 'initial'};
`;

Flex.propTypes = {
    column: Type.bool,
    align: Type.oneOf(['center', 'flex-start', 'flex-end']),
    justify: Type.oneOf(['flex-start', 'flex-end', 'space-between', 'space-around']),
};

export default Flex;