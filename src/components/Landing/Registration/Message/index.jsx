import React from 'react';
import useEmail from "hooks/useEmail";
import {useLocalizationContext} from "contexts/Localization";
import Header from "../../atoms/Header";
import LargeSpan from "../../atoms/LargeSpan";
import Divider from "../../atoms/Divider";
import CenteredSpan from "./CenteredSpan";
import StyledLink from "./StyledLink";
import FullWidthButton from "./FullWidthButton";

const Message = () => {
    const {registration} = useLocalizationContext();
    const emailDomain = useEmail('anton1337@gmail.com');

    return <>
        <Header>{registration.second.header}</Header>
        <LargeSpan>{registration.second.info}</LargeSpan>
        <Divider/>
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
        <Divider/>
    </>;
};

export default React.memo(Message);