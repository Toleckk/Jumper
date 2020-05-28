import styled from "styled-components"

export default styled.a`
  border: 1px solid rgb(${props => props.theme.primary});
  border-radius: 20px;
  
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: -1px 1px 10px rgb(${props => props.theme.primary});
  
  &:hover {
    box-shadow: -1px 1px 15px rgb(${props => props.theme.secondary});
    border-color: rgb(${props => props.theme.secondary});
    background-color: rgba(0, 0, 0, 0.2);
  }
  
  &::before,
  &::after {
    content: '';
    display: block;
  }
  
  @media(max-width: 768px) {
    width: 180px;
    height: 200px;
    margin: auto;
  }
`