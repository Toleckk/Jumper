import React from 'react';
import {useLocation} from 'react-router-dom';
import useEmail from "Common/hooks/useEmail";
import {useLocalizationContext} from "Common/contexts/Localization";
import {Landing} from "Common/templates";
import CenteredSpan from "./CenteredSpan";
import StyledLink from "./StyledLink";
import FullWidthButton from "./FullWidthButton";

const Message = () => {
    const {t} = useLocalizationContext();
    const {state} = useLocation();
    const emailDomain = useEmail(state.email);

    return <Landing
        withLastDivider
        header={t('Check your email')}
        description={t('Link will be sent')}
        content={
            () => <>
                <br/>
                <CenteredSpan>{t('Follow instructions', {...state})}</CenteredSpan>
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