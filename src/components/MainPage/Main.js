import styled from "styled-components";

export default styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    background: rgba(0, 0, 0, 0.2);
    color: rgb(${props => props.theme.primaryText});
    
    & > span {
        margin-top: 20px;
    }
`;