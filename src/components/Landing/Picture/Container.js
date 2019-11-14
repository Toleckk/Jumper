import styled from "styled-components";

export default styled.aside`
    flex: 1;

    margin-top: calc(11vh - 40vw * ${Math.sin(Math.PI / 18)} + 1.5rem);
    min-height: calc(40vw * (${Math.sin(Math.PI / 18) + Math.cos(Math.PI / 18)}));

    @media (min-device-aspect-ratio: 16/9) {
        margin-top: calc(5vh - 40vw * ${Math.sin(Math.PI / 18)} + 1.5rem);
        min-height: calc(35vw * (${Math.sin(Math.PI / 18) + Math.cos(Math.PI / 18)}));
    }    
`;