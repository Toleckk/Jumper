import styled from "styled-components";

export default styled.aside`
    flex: 1;

    margin-top: calc(26vh - 40vw * ${Math.sin(Math.PI / 18)} + 1.5rem);
    min-height: calc(40vw * (${Math.sin(Math.PI / 18) + Math.cos(Math.PI / 18)})); 
`;