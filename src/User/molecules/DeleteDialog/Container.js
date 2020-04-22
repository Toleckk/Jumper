import styled from "styled-components"

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  color: rgb(${props => props.theme.secondaryText});

  width: 350px;
  
  padding: 20px;
  
  background: rgba(0, 0, 0, 0.8);
  
  border: 1px solid rgb(${props => props.theme.secondary});
  border-radius: 10px;
  
  box-shadow: 0 3px 15px rgba(${props => props.theme.secondary}, 0.7);
  
  @media(max-width: 768px) {
    width: 75vw;
    min-height: 10vh;
    flex-direction: column;
    align-items: flex-end;
  }
`;