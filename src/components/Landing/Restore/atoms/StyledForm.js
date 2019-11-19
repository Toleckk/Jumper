import styled from "styled-components";
import {Flex} from "components/Common/atoms";
import {Form} from "components/Common/molecules";

export default styled(Flex).attrs({as: Form, direction: 'column', align: 'center'})`
    width: 35%;
`;