import styled from "styled-components"

export default styled.input`
  &:focus {
    box-shadow: rgb(163,67,81) 0 0 1.4rem;
    border-color: rgb(163,67,81);
  }
  
  border: 2px solid rgba(186,186,199,0.9);
  color: rgb(186,186,199);
  border-radius: 35px;
  background: transparent;
  width: 100%;
  font-size: larger;
  padding: 20px 70px 20px 20px;
  box-sizing: border-box;
`