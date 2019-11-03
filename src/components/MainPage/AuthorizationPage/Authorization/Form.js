import styled from "styled-components";
import Flex from "../../../atoms/Flex";

export default styled(Flex).attrs({as: 'form', column: true, align: 'center'})`
    margin-top: 28px;
    min-width: 100px;
    
    & > *:not(:first-child) {
        margin-top: 15px;
    }
`;