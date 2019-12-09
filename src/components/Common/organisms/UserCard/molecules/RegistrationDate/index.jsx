import React from "react";
import Type from "prop-types";
import {useTranslation} from "contexts/Localization";
import Container from "./Container";

const RegistrationDate = ({date}) => {
    const {t} = useTranslation();
    const dateString = new Date(date).toLocaleDateString();
    return <Container>{t('on site since') + ': ' + dateString}</Container>;
};

RegistrationDate.propTypes = {
    date: Type.string.isRequired
};

export default React.memo(RegistrationDate);