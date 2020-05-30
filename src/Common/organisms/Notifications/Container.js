import styled from 'styled-components'

export default styled.div`
  position: relative;
  
  background-color: rgb(${props => props.theme.primaryDark});
  
  min-width: 25vw;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(${props => props.theme.primaryText}, 0.1);
    pointer-events: none;
  }
`