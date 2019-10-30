import styled from "styled-components";

export default styled.form`
    margin-top: 28px;
    width: 40%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > button {
        margin-top: 30px;
        width: 50%;
    }
    
    & > input, div {
        min-width: 100px;
        margin-top: 15px;
    }
`;