import styled, {keyframes} from "styled-components";

const createAnimation = color => keyframes`
    to {
        color: ${color};
        background: transparent;
        font-size: large;
    }
`;

export default styled.input`
    flex: 1;
    min-width: 77px;
    
    animation-name: ${props => createAnimation(`rgb(${props.theme.primaryText})`)};
    animation-fill-mode: both;
`;