import styled from "styled-components";

export default styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    background: rgba(0, 0, 0, 0.2);
    color: #babac7;
    
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    
    & > span {
        margin-top: 20px;
    }
`;