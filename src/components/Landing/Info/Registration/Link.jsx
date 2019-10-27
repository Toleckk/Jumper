import {Link} from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
    width: 30%;
    margin-top: 20px;
    
    & > * {
        width: 100%;
    }
    
    &:focus {
        outline: none;
    }
`;