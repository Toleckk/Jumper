import styled from "styled-components";
import {Button} from "Common/atoms";

export default styled(Button)`
    margin-top: 30px;
    width: 55%;
    
    @media (max-width: 768px) {
      width: auto;
      padding-right: 2rem;
      padding-left: 2rem;
    }
`;