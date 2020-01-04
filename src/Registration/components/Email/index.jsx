import React from 'react';
import {useLocalizationContext} from "Common/contexts/Localization";
import {Landing} from "Common/templates";
import EmailForm from "./EmailForm";

const Email = () => {
    const {t} = useLocalizationContext();
    return <Landing header={t('create')} description={t('You are on registration page')} content={EmailForm}/>;
};

export default React.memo(Email);