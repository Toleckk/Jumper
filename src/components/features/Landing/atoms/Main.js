import styled from "styled-components";
import Flex from "../../../atoms/Flex";

export default styled(Flex).attrs({as: 'main', column: true, align: 'center'})`
    flex: 1;
    
    background: rgba(0, 0, 0, 0.2);
    color: rgb(${props => props.theme.primaryText});
`;