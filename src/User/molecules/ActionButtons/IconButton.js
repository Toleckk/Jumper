import styled from "styled-components";
import {Button} from "Common/atoms";

export default styled(Button)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 5px;
    
    @media (max-width: 768px) {
      width: 36px;
      height: 36px;
    }
`;