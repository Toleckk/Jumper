import React from 'react';
import {Flex} from "Common/atoms";
import {useTranslation} from "Common/contexts/Localization";
import Link from "./Link";
import StyledButton from "./StyledButton";
import StyledSpan from "./StyledSpan";

const Registration = () => {
    const {t} = useTranslation();

    return <Flex direction="column" align="center">
        <StyledSpan>{t('Join us')}</StyledSpan>
        <Link to={'/registration'}>
            <StyledButton>{t('signUp')}</StyledButton>
        </Link>
    </Flex>;
};

export default React.memo(Registration);