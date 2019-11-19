import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import Header from "../../atoms/Header";
import LargeSpan from "../../atoms/LargeSpan";
import Divider from "../../atoms/Divider";
import PasswordForm from "./PasswordForm";

const Password = () => {
    const {registration: {third}} = useLocalizationContext();

    return <>
        <Header>{third.header}</Header>
        <LargeSpan>{third.info}</LargeSpan>
        <Divider/>
        <PasswordForm/>
    </>;
};

export default React.memo(Password);