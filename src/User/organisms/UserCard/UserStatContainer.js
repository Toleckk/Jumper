import styled from "styled-components";
import {Flex} from "Common/atoms";

const UserStatContainer = styled(Flex).attrs({justify: 'space-evenly'})`
    flex-wrap: wrap;
    margin-top: 40px;
    margin-bottom: 15px;
`;

export default UserStatContainer;