import styled from 'styled-components'
import dark from '../Common/theme/dark'

export default styled.div`
  padding: 30px;
  width: 55vw;
  height: 80vh;
  background: ${props => props.theme === dark ? 'rgba(0, 0, 0, 0.8)' : 'white'};
  box-shadow: 0 0 15px rgb(${props => props.theme.primary});
  position: relative;
  
  display: flex;
  flex-direction: column;
  
  @media(max-width: 768px) {
    width: 95vw;
  }
`