import React from 'react';
import Flex from "components/Common/atoms/Flex";
import {useLocalizationContext} from "contexts/Localization";
import Link from "./Link";
import StyledButton from "./StyledButton";
import StyledSpan from "./StyledSpan";

const Registration = () => {
    const {info} = useLocalizationContext();

    return <Flex direction="column" align="center">
        <StyledSpan>{info.signUp}</StyledSpan>
        <Link to={'/registration'}>
            <StyledButton>{info.signUpButton}</StyledButton>
        </Link>
    </Flex>;
};

export default React.memo(Registration);