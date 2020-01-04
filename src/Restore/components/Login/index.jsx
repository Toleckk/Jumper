import React from 'react';
import {useTranslation} from "Common/contexts/Localization";
import StyledSpan from "../atoms/StyledSpan";
import RestoreForm from "./RestoreForm";
import {Landing} from "Common/templates";

const Login = () => {
    const {t} = useTranslation();

    return <Landing
        withLastDivider
        header={t('Enter data for restore')}
        description={t('Restore action')}
        content={() => <>
            <StyledSpan>{t('Enter your login')}</StyledSpan>
            <RestoreForm/>
        </>}
    />;
};

export default React.memo(Login);