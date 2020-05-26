import styled from "styled-components";
import {Flex} from "Common/atoms";

export default styled(Flex).attrs({align: 'center', justify: 'space-between'})`
    width: 90%;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
`;