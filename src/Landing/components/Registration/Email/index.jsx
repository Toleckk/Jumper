import React from 'react';
import {useLocalizationContext} from "Common/contexts/Localization";
import EmailForm from "./EmailForm";
import {MainPageTemplate} from "../../templates"

const Email = () => {
    const {t} = useLocalizationContext();

    return <MainPageTemplate header={t('create')}
                             description={t('You are on registration page')}
                             content={EmailForm}
    />;
};

export default React.memo(Email);