import React from 'react';
import {useTranslation} from "Common/contexts/Localization";
import {Landing} from "Common/templates";
import PasswordForm from "./PasswordForm";
import {StyledSpan} from "../atoms";

const Password = () => {
    const {t} = useTranslation();

    return <Landing
        withLastDivider
        header={t('Create new password')}
        description={t('Sessions will be interrupted')}
        content={() => <>
            <StyledSpan>{t('Short password format')}</StyledSpan>
            <PasswordForm/>
        </>}
    />;
};

export default React.memo(Password);