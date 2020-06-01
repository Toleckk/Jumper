import styled from 'styled-components'

export default styled.div`
  padding: 30px;
  width: 55vw;
  height: 80vh;
  background: ${props => props.theme.name === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'white'};
  box-shadow: 0 0 15px rgb(${props => props.theme.primary});
  position: relative;
  
  display: flex;
  flex-direction: column;
  
  @media(max-width: 768px) {
    width: 100vw;
    padding: 0;
  }
`