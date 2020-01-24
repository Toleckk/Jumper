import styled from "styled-components";

export default styled.div`
    width: 200px;
    padding: 5px;

    position: absolute;
    right: 0;
    top: 0;
    
    @media (max-width: 768px) {
      position: static;
      align-self: flex-end;
      padding: 0;
      margin-top: 10px;
      width: 190px;
    }
`;