import styled from "styled-components";
import {Flex} from "components/Common/atoms";

export default styled(Flex).attrs({as: 'section', direction: 'column'})`
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
`;