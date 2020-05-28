import styled from "styled-components"
import {Drawer} from "react-pretty-drawer"

export default styled(Drawer)`
  display: flex;
  flex-direction: column; 
  align-items: center;
 
  background: rgb(${props => props.theme.primaryDark}) !important;
  
  padding-top: 5vh;
  box-sizing: border-box;
`