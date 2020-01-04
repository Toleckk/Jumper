import React from 'react';
import {useTranslation} from "Common/contexts/Localization";
import {Landing} from "Common/templates";
import EmailForm from "./EmailForm";

const Email = () => {
    const {t} = useTranslation();
    return <Landing header={t('create')} description={t('You are on registration page')} content={EmailForm}/>;
};

export default React.memo(Email);