import React from 'react';
import {useTranslation} from "Common/contexts/Localization";
import AuthorizationForm from "./AuthorizationForm";
import Registration from "./Registration";
import {MainContent} from "../../../templates";

const Authorization = () => {
    const {t} = useTranslation();

    return <MainContent
            header={t('Let people know about your thoughts')}
            description={t('Log in to account')}
            content={AuthorizationForm}
            footer={Registration}
        />
};

export default React.memo(Authorization);