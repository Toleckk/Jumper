import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import EmailForm from "./EmailForm";
import MainPageTemplate from "../../templates/MainPageTemplate";

const Email = () => {
    const {registration: {one}} = useLocalizationContext();

    return <MainPageTemplate header={one.header} description={one.info} content={EmailForm}/>;
};

export default React.memo(Email);