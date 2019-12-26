import styled from "styled-components";
import {Flex} from "Common/atoms";

export default styled(Flex).attrs({as: 'main', direction: 'column', align: 'center'})`
    flex: 1;
    padding-bottom: 5px;
    
    background: rgba(0, 0, 0, 0.2);
    color: rgb(${props => props.theme.primaryText});
`;