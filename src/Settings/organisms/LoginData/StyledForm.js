import styled from "styled-components"
import {Button} from "Common/atoms"

export default styled.form`
  width: 40%;

  & > * {
    margin-top: 1em;
  }
  
  & > ${Button} {
    border-radius: 20px;
  }
`