import styled from "styled-components";
import {Flex} from "components/Common/atoms";

export default styled(Flex).attrs({as: 'footer', direction: 'row-reverse', align: 'center'})`
    align-self: flex-end;
    margin-top: 5px;
`;