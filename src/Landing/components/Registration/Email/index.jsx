import React from 'react';
import {useLocalizationContext} from "Common/contexts/Localization";
import EmailForm from "./EmailForm";
import {MainPageTemplate} from "../../templates"
import {useLoadingContext} from "../../../contexts/LoadingContext";

const Email = () => {
    const {t} = useLocalizationContext();
    const {loading} = useLoadingContext();

    return <MainPageTemplate loading={loading}
                             header={t('create')}
                             description={t('You are on registration page')}
                             content={EmailForm}
    />;
};

export default React.memo(Email);