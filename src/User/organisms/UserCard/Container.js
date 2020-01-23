import styled from "styled-components";
import {Flex} from "Common/atoms";

export default styled(Flex).attrs({direction: 'column', as: 'section'})`
    padding: 10px;
    box-sizing: border-box;
    position: relative;
`;