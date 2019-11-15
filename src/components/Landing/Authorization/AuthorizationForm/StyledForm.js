import styled from "styled-components";
import {Flex} from "components/Common/atoms";

export default styled(Flex).attrs({direction: 'column', align: 'center', as: 'form'})`  
   min-width: 100px;
   width: 36%;
   
   flex-shrink: 0;
  
   & > *:nth-child(2) {
         margin-top: 15px;
   }
 `;

