import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import Header from "../../atoms/Header";
import LargeSpan from "../../atoms/LargeSpan";
import Divider from "../../atoms/Divider";
import CenteredSpan from "./CenteredSpan";

const Message = () => {
    const {registration} = useLocalizationContext();

    return <>
        <Header>{registration.second.header}</Header>
        <LargeSpan>{registration.second.info}</LargeSpan>
        <Divider/>
        <br/>
        <CenteredSpan>{registration.second.description}</CenteredSpan>
        <br/>
        <CenteredSpan>{registration.second.warning}</CenteredSpan>
        <br/>
        <Divider/>
    </>;
};

export default Message;