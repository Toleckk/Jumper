import styled from "styled-components";

export default styled.input`
    margin-top: 15px;
    
    border-radius: 4px;
    padding: 10px 12px;
    border: 2px solid darkgrey;
    font-size: medium;
    background: transparent;
    transition: all 300ms;
    color: #babac7;
    
    &:focus {
        outline: none;
        border-color: rgb(163, 67, 81);
        box-shadow: rgba(163, 67, 81, 0.5) 0 0 0.8rem 0.2rem;
    }
`;