import React from 'react';
import {useTranslation} from "Common/contexts/Localization";
import {MainContent} from "../../../../templates";
import EmailForm from "./EmailForm";

const Email = () => {
    const {t} = useTranslation();
    return <MainContent header={t('create')} description={t('You are on registration page')} content={EmailForm}/>;
};

export default React.memo(Email);