import styled from "styled-components";

export default styled.textarea`
    width: 100%;
    height: 12vh;
    resize: none;
    background: rgba(0, 255, 255, 0.1);
    border: 2px solid rgb(${props => props.theme.primary});
    border-radius: 15px;
    color: rgb(${props => props.theme.primaryText});
    padding: 10px;
    box-sizing: border-box;
    font-size: large;
    margin-bottom: 15px;
`;