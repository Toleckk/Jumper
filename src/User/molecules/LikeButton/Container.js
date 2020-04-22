import styled from "styled-components"
import IconContainer from "../PostAction/IconContainer"

export default styled.div`
  & ${IconContainer} {
    ${props => props.active && `filter: drop-shadow(0 0 3px rgb(${props.theme.error})) contrast(1.5);`}
  }
`;