import styled from "styled-components";
import {Flex} from "Common/atoms";
import {Form} from "Common/molecules";

export default styled(Flex).attrs({as: Form, direction: 'column', align: 'center'})`
    width: 35%;
`;