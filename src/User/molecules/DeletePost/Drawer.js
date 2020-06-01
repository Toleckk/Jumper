import styled from "styled-components"
import {Drawer} from "react-pretty-drawer"

export default styled(Drawer)`
  display: flex;
  flex-direction: column; 
  align-items: center;
   
  box-sizing: border-box;
  
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  
  width: 350px;
  border-radius: 10px !important;
  
  background: ${props => props.theme.name === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'white'} !important;
  box-shadow: 0 3px 15px rgba(${props => props.theme.secondary}, 0.7) !important;
  
  @media (min-width: 768px) {
    margin: auto; 
  }  
`