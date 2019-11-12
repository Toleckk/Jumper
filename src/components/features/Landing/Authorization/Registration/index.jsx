import React from 'react';
import Link from "./Link";
import Flex from "../../../../atoms/Flex";
import StyledButton from "./StyledButton";
import {useLocalizationContext} from "../../../../../contexts/Localization";

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