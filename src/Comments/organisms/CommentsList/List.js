import styled from "styled-components"

export default styled.div`
  overflow-y: auto;
  
  display: flex;
  flex-direction: column;
  
  height: 100%;
  width: 100%;
  
  & > div {
      display: flex;
      flex-direction: column-reverse;
  }
`