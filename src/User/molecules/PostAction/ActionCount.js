import styled from "styled-components";

export default styled.span`
    color: rgba(${props => props.theme.secondaryText}, 0.8);

    margin-left: 1ex;
    
    @media (max-width: 768px) {
      margin-left: 0.5ex;
    }
`;