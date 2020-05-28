import styled from "styled-components";

export default styled.div`
    padding: 5px;

    position: absolute;
    right: 0;
    top: 0;
  
    min-width: 1px;
    min-height: 1px;
    
    @media (max-width: 768px) {
      position: static;
      align-self: flex-end;
      padding: 0;
      margin-top: 10px;
      width: auto;
    }
`;