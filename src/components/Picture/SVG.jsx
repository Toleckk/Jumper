import styled from "styled-components";

export default styled.svg`
    width: 80%;
    transform: rotate(100deg);
    filter: blur(2px) contrast(130%) drop-shadow(0 0 1rem rgba(0, 255, 255, 0.5));
    
    @media (min-device-aspect-ratio: 16/9) {
        width: 70%;
    }
`;