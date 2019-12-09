import React from "react";
import Type from "prop-types";
import {useTranslation} from "contexts/Localization";
import Container from "./Container";
import Count from "./Count";

const Counts = ({user}) => {
    const {t} = useTranslation();

    return <Container>
        <Count name={t('subscribers')} count={user.subscribersCount}/>
        <Count name={t('subscribes')} count={user.subscribesCount}/>
        <Count name={t('posts')} count={user.postsCount}/>
    </Container>
};

Counts.propTypes = {
    user: Type.shape({
        subscribersCount: Type.number.isRequired,
        subscribesCount: Type.number.isRequired,
        postsCount: Type.number.isRequired,
    }).isRequired
};

export default React.memo(Counts);