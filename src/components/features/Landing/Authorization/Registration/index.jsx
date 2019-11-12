import React from 'react';
import local from "../../../../../local";
import Link from "./Link";
import Flex from "../../../../atoms/Flex";
import StyledButton from "./StyledButton";

const Registration = () => <Flex direction="column" align="center">
    <span>{local.info.signUp}</span>
    <Link to={'/registration'}>
        <StyledButton>{local.info.signUpButton}</StyledButton>
    </Link>
</Flex>;

export default React.memo(Registration);