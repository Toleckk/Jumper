import styled from "styled-components"
import {Button} from "Common/atoms"

export default styled.form`
  width: 40%;
  
  @media(max-width: 768px) {
    width: initial;
  }
  
  & > * {
    margin-top: 1em;
  }
  
  & > ${Button} {
    border-radius: 20px;
    
    @media(max-width: 768px) {
      width: 100%;
    }
  }
`