import styled from "styled-components";
import Type from "prop-types";

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    align-items: ${props => props.align || 'initial'};
`;

Flex.propTypes = {
    column: Type.bool,
    align: Type.oneOf(['center', 'start', 'end'])
};

export default Flex;