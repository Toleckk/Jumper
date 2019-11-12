import styled from "styled-components";
import {Link} from "react-router-dom";

export default styled(Link)`
    margin-top: 10px;
    text-decoration: none;
    color: rgb(${props => props.theme.primaryText});
`;