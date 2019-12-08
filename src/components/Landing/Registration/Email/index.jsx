import React from 'react';
import {useTranslation} from "contexts/Localization";
import EmailForm from "./EmailForm";
import {MainPageTemplate} from "../../templates"

const Email = () => {
    const {t} = useTranslation();

    return <MainPageTemplate header={t('create')} description={t('You are on registration page')} content={EmailForm}/>;
};

export default React.memo(Email);