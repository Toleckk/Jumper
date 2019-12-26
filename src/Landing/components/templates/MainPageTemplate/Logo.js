import styled from "styled-components";
import Type from "prop-types";

const Logo = styled.img`
    height: ${props => props.large ? '25vh' : '20vh'};
`;

Logo.defaultProps = {
    large: false
};

Logo.propTypes = {
    large: Type.bool
};

export default Logo;