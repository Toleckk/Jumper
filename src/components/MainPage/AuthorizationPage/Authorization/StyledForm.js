import styled from "styled-components";
import Flex from "../../../atoms/Flex";

export default styled(Flex).attrs({column: true, align: 'center', as: 'form'})`  
   min-width: 100px;
  
   & > *:nth-child(2) {
         margin-top: 15px;
   }
 `;

