import React from 'react';
import Flex from "components/atoms/Flex";
import {useLocalizationContext} from "contexts/Localization";
import Link from "./Link";
import StyledButton from "./StyledButton";

const Registration = () => {
    const {info} = useLocalizationContext();

    return <Flex direction="column" align="center">
        <span>{info.signUp}</span>
        <Link to={'/registration'}>
            <StyledButton>{info.signUpButton}</StyledButton>
        </Link>
    </Flex>;
};

export default React.memo(Registration);