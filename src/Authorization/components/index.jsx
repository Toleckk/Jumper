import React from 'react';
import {useLocalizationContext} from "Common/contexts/Localization";
import AuthorizationForm from "./AuthorizationForm";
import Registration from "./Registration";
import {Landing} from "Common/templates"

const Authorization = () => {
    const {t} = useLocalizationContext();

    return <Landing
            header={t('Let people know about your thoughts')}
            description={t('Log in to account')}
            content={AuthorizationForm}
            footer={Registration}
        />
};

export default React.memo(Authorization);