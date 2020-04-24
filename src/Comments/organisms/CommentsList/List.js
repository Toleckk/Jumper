import styled from "styled-components"

export default styled.div`
  overflow-y: auto;
  
  display: flex;
  flex-direction: column-reverse;
  
  max-height: 400px;
  width: 100%;
  
  & > div {
      display: flex;
  flex-direction: column-reverse;
  }
`