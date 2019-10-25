import styled from "styled-components";

export default styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding-top: 11%;
    
    @media (min-device-aspect-ratio: 16/9) {
        padding-top: 5%;
    }
`;