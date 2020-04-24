import styled from "styled-components"
import Container from 'Search/organisms/UserCard/Container'

export default styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  
  flex-wrap: wrap;
  
  & > ${Container} {
    margin-bottom: 10px;
  }
`