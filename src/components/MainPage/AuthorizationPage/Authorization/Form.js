import styled from "styled-components";
import Flex from "../../../atoms/Flex";

export default styled(Flex).attrs({as: 'form', column: true, align: 'center'})`
    min-width: 100px;
    
    & > *:nth-child(2) {
        margin-top: 15px;
    }
`;