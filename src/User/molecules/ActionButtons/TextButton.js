import styled from "styled-components";
import {Button} from "Common/atoms";

export default styled(Button)`
    padding: 5px 1.5em;
    font-weight: 600;
    border-radius: 20px;
    
    &[disabled] {
      border-color: rgb(${props => props.theme.secondaryText});
      border-style: dashed;
      pointer-events: none;
    }
`;