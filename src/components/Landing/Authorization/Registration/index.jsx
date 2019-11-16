import React from 'react';
import Flex from "components/Common/atoms/Flex";
import {useLocalizationContext} from "contexts/Localization";
import Link from "./Link";
import StyledButton from "./StyledButton";
import StyledSpan from "./StyledSpan";

const Registration = () => {
    const {authorization} = useLocalizationContext();

    return <Flex direction="column" align="center">
        <StyledSpan>{authorization.signUp}</StyledSpan>
        <Link to={'/registration'}>
            <StyledButton>{authorization.signUpButton}</StyledButton>
        </Link>
    </Flex>;
};

export default React.memo(Registration);