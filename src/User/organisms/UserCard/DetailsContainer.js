import styled from "styled-components";
import {Flex} from "Common/atoms";

export default styled(Flex).attrs({direction: 'column', justify: 'space-evenly'})`
    flex: 1;
    margin-left: 15px;
    margin-right: 15px;
`;