import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import Header from "../atoms/Header";
import Logo from "../Authorization/atoms/Logo";
import StyledSpan from "./atoms/StyledSpan";
import Divider from "../atoms/Divider";
import RestoreForm from "./RestoreForm";
import LargeSpan from "../atoms/LargeSpan";

const Restore = () => {
    const {restore} = useLocalizationContext();

    return <>
        <Logo/>
        <Header>{restore.header}</Header>
        <LargeSpan>{restore.info}</LargeSpan>
        <Divider/>
        <StyledSpan>{restore.login}</StyledSpan>
        <RestoreForm/>
        <Divider/>
    </>;
};

export default Restore;