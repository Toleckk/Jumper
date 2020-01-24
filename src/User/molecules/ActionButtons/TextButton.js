import styled from "styled-components";
import {Button} from "Common/atoms";

export default styled(Button)`
    padding: 5px 1.5em;
    font-weight: 600;
    border-radius: 20px;
    
    @media (max-width: 768px) {
      padding-top: 3px;
      padding-bottom: 3px;
    }
`;