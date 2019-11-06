import styled from "styled-components";
import Form from "../../../atoms/Form";
// import Flex from "../../../atoms/Flex";

//export default styled(Flex).attrs({column: true, align: 'center', as: Form})`
export default styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  min-width: 100px;
  
  & > *:nth-child(2) {
        margin-top: 15px;
  }
`;
