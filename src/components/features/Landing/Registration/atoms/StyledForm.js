import styled from "styled-components";
import {Flex} from "components/atoms";

export default styled(Flex).attrs({direction: 'column', align: 'center', as: 'form'})`
  width: 100%;
`;