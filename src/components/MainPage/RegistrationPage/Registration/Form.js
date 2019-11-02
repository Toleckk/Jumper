import styled from "styled-components";
import Flex from "../../../atoms/Flex";

export default styled(Flex).attrs({as: 'form', column: true})`
    width: 40%;
    
    & > * {
        margin-top: 20px;
    }
`;