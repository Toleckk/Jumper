import React from 'react';
import Header from "../../atoms/Header";
import Text from "../atoms/Text";
import Divider from "../../atoms/Divider";
import EmailForm from "./EmailForm";
import {useLocalizationContext} from "../../../../../contexts/Localization";

const Email = () => {
    const {registration: {one}} = useLocalizationContext();

    return <>
        <Header>{one.header}</Header>
        <Text>{one.info}</Text>
        <Divider/>
        <EmailForm/>
    </>;
};

export default React.memo(Email);