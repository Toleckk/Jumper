import {Link} from "react-router-dom";
import styled from "styled-components";
import Flex from "../../../../atoms/Flex";

export default styled(Flex).attrs({as: Link, direction: 'column', tabIndex: -1})`
    margin-top: 20px;
    text-decoration: none;
`;