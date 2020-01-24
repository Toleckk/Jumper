import styled from "styled-components";
import Type from "prop-types";

const Nickname = styled.span`
    font-size: ${props => props.size === 'big' ? 'x-large' : 'large'};
    font-weight: 700;
    line-height: 2.25;
    color: rgb(${props => props.theme.secondaryText});
    filter: drop-shadow(0px 0px 0.4rem rgba(${props => props.theme.primaryText}, 0.8));
    
    @media(max-width: 768px) {
      font-size: ${props => props.size === 'big' ? 'larger' : 'medium'};
    }
`;

Nickname.defaultProps = {
    size: 'big',
};

Nickname.propTypes = {
    size: Type.oneOf(['big', 'small']),
};

export default Nickname;