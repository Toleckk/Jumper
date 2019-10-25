import styled from "styled-components";

export default styled.button`
    align-self: center;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1.5px solid rgb(2, 132, 132);
    background: transparent;
    color: rgb(202, 202, 220);
    cursor: pointer;
    font-size: medium;
    user-select: none;
    text-decoration: none;
    
    transition: all 100ms;
    
    &:hover {
        border-color: rgb(2, 132, 132);
        box-shadow: rgba(2,132,132, 0.6) 0 0 1.5rem;
        background: radial-gradient(transparent, rgba(163, 67, 81, 0.35));
    }
    
    &:focus {
        outline: none;
    }
`;