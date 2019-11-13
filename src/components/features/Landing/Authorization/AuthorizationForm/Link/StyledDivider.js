import styled from "styled-components";
import Type from "prop-types";
import Divider from "components/features/Landing/atoms/Divider";

const StyledDivider = styled(Divider)`
    margin: 0;
    
    transition: all 100ms;

    background: rgba(${props => props.theme.secondary}, ${props => props.hovered ? 0.9 : 0.7});
    box-shadow: rgba(${props => props.theme.secondary}, ${props => props.hovered ? 0.9 : 0.7}) 0 0 1rem 0.05rem;    
`;

StyledDivider.defaultProps = {
    hovered: false,
};

StyledDivider.propTypes = {
    hovered: Type.bool,
};

export default StyledDivider;