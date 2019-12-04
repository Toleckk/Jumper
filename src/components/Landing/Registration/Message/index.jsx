import React from 'react';
import useEmail from "hooks/useEmail";
import {useLocalizationContext} from "contexts/Localization";
import CenteredSpan from "./CenteredSpan";
import StyledLink from "./StyledLink";
import FullWidthButton from "./FullWidthButton";
import MainPageTemplate from "../../templates/MainPageTemplate";

// TODO: email
const Message = () => {
    const {registration} = useLocalizationContext();
    const emailDomain = useEmail('anton1337@gmail.com');

    return <MainPageTemplate
        withLastDivider
        header={registration.second.header}
        description={registration.second.info}
        content={
            () => <>
                <br/>
                <CenteredSpan>{registration.second.description}</CenteredSpan>
                <br/>
                <CenteredSpan>{registration.second.warning}</CenteredSpan>
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