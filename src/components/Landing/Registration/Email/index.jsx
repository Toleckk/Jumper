import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import Header from "../../atoms/Header";
import LargeSpan from "../../atoms/LargeSpan";
import Divider from "../../atoms/Divider";
import EmailForm from "./EmailForm";

const Email = () => {
    const {registration: {one}} = useLocalizationContext();

    return <>
        <Header>{one.header}</Header>
        <LargeSpan>{one.info}</LargeSpan>
        <Divider/>
        <EmailForm/>
    </>;
};

export default React.memo(Email);