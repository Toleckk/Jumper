import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import {Button, Input} from "components/molecules";
import Header from "../atoms/Header";
import StyledForm from "./StyledForm";
import Logo from "../Authorization/atoms/Logo";
import StyledSpan from "./StyledSpan";

const Restore = () => {
    const {info, restore} = useLocalizationContext();

    return <>
        <Logo/>
        <Header>{restore.header}</Header>
        <StyledSpan>{restore.info}</StyledSpan>
        <StyledForm>
            <Input id="login" legend={info.loginInputPlaceholder}/>
            <Button>Далее</Button>
        </StyledForm>
    </>;
};

export default Restore;