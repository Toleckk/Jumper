import styled, {css} from "styled-components";
import Type from "prop-types";

const Ring = styled.div`
    ${({animation, bold, size, theme}) => css`
        width: ${size}vh;
        height: ${size}vh;
        
        border: ${bold}px solid rgb(${theme.primary}); 
        border-radius: 50%;
        
        box-shadow: inset rgba(${theme.secondary}, 0.7) 0 0 2rem 0.5rem, 
                    rgba(${theme.secondary}, 0.7) 0 0 2rem 0.5rem;
        opacity: 0.5;
        
        animation: 2s linear -1s infinite normal none running ${animation};
    `}
`;

Ring.defaultProps = {
    size: 0,
    bold: 0,
};

Ring.propTypes = {
    animation: Type.object,
    size: Type.number,
    bold: Type.number,
};

export default Ring;