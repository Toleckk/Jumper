import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import PasswordForm from "./PasswordForm";
import Header from "../../atoms/Header";
import LargeSpan from "../../atoms/LargeSpan";
import Divider from "../../atoms/Divider";
import StyledSpan from "../atoms/StyledSpan";

const Password = () => {
    const {restore} = useLocalizationContext();

    return <>
        <Header>{restore.password.header}</Header>
        <LargeSpan>{restore.password.info}</LargeSpan>
        <Divider/>
        <StyledSpan>{restore.password.password}</StyledSpan>
        <PasswordForm/>
        <Divider/>
    </>;
};

export default React.memo(Password);