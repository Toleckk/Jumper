import styled from 'styled-components'


export default styled.div`
  height: calc(${props => props.height} * 0.8);
  width: calc(${props => props.height} * 0.8);
  
  border-radius: 50%;
  
  background-color: rgb(${props => props.checked ? props.theme.secondary : props.theme.primaryText});
  
  transition: all 200ms linear;
  transition-property: transform, background-color;
  
  transform: translateX(${props => props.checked ? `calc(${props.width} - 110%)` : '10%'});
`