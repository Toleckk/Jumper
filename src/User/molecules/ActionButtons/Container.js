import styled from "styled-components";
import {Flex} from "Common/atoms";

export default styled(Flex).attrs({justify: 'space-between'})`
    
    @media (max-width: 768px) {
      width: auto;
      min-width: unset;
    }
`;