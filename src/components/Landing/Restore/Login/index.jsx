import React from 'react';
import {useTranslation} from "contexts/Localization";
import RestoreForm from "./RestoreForm";
import {MainPageTemplate} from "../../templates";

const Login = () => {
    const {t} = useTranslation();

    return <MainPageTemplate
        withLastDivider
        header={t('Enter data for restore')}
        description={t('Restore action')}
        content={RestoreForm}
    />;
};

export default React.memo(Login);