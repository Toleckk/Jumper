import styled from "styled-components"
import {Drawer} from "react-pretty-drawer"

export default styled(Drawer)`
  display: flex;
  flex-direction: column; 
  align-items: center;
   
  box-sizing: border-box;
  
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  
  background: ${props => props.theme.name === 'dark' ? `rgb(${props.theme.primaryDark})` : 'white'} !important;
  box-shadow: 0 0 15px rgb(${props => props.theme.primary}) !important;
  
  @media (min-width: 768px) {
    margin: auto; 
  }  
`