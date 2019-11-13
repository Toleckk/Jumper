import styled from "styled-components";
import Type from "prop-types";

const StyledLegend = styled.legend`
    padding-left: ${props => props.focused ? 5 : 4}px;
    padding-right: ${props => props.focused ? 5 : 4}px;
    padding-bottom: 5px;
    user-select: none;
    transition: all 300ms;
`;

StyledLegend.propTypes = {
    focused: Type.bool,
};

export default StyledLegend;