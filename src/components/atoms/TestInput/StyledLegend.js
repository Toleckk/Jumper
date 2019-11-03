import styled from "styled-components";

export default styled.legend`
    padding-left: ${props => props.focused ? 5 : 4}px;
    padding-right: ${props => props.focused ? 5 : 4}px;
    padding-bottom: 5px;
    user-select: none;
    transition: all 300ms;
`;