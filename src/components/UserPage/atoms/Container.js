import styled from "styled-components";
import {Flex} from "components/Common/atoms";

export default styled(Flex).attrs({justify: 'center'})`
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding-bottom: 2vh;
    background-color: #03161D;
`;