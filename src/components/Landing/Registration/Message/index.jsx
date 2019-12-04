import React from 'react';
import useEmail from "hooks/useEmail";
import {useLocalizationContext} from "contexts/Localization";
import CenteredSpan from "./CenteredSpan";
import StyledLink from "./StyledLink";
import FullWidthButton from "./FullWidthButton";
import {MainPageTemplate} from "../../templates";

// TODO: email
const Message = () => {
    const {t} = useLocalizationContext();
    const emailDomain = useEmail('anton1337@gmail.com');

    return <MainPageTemplate
        withLastDivider
        header={t('Check your email')}
        description={t('Link will be sent')}
        content={
            () => <>
                <br/>
                <CenteredSpan>{t('Follow instructions')}</CenteredSpan>
                <br/>
                <CenteredSpan>{t('Cannot find?')}</CenteredSpan>
                <br/>
                {emailDomain && (
                    <StyledLink href={emailDomain.url} target="_blank" rel="noopener noreferrer">
                        <FullWidthButton>{emailDomain.name}</FullWidthButton>
                    </StyledLink>
                )}
            </>
        }
    />;
};

export default React.memo(Message);