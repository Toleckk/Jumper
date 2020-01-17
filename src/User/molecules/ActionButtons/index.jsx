import React, {useContext} from 'react';
import {useTranslation} from "Common/contexts/Localization";
import {ThemeContext} from "styled-components";
import {Icon} from "../../atoms";
import Container from "./Container";
import IconButton from "./IconButton";
import TextButton from "./TextButton";

const ActionButtons = () => {
    const {t} = useTranslation();
    const theme = useContext(ThemeContext);

    return <Container>
        <TextButton>{t('Follow')}</TextButton>
        <IconButton>
            <Icon icon="message" color={`rgb(${theme.primaryText})`}/>
        </IconButton>
        <IconButton>
            <Icon icon="more" color={`rgb(${theme.primaryText})`}/>
        </IconButton>
    </Container>;
};

export default React.memo(ActionButtons);