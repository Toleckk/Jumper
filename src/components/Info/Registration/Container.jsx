import styled from "styled-components";

export default styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & :first-child {
        margin-top: 30px;
    }
    
    & :last-child {
        width: 30%;
        margin-top: 20px;
    }
`;