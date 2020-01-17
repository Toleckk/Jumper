import React, {useMemo} from 'react';
import Type from "prop-types";
import {Icon} from "../../atoms";
import Container from "./Container";

const AdditionalDescription = ({user}) => {
    // noinspection JSCheckFunctionSignatures
    const birthday = useMemo(
        () => user.description.birthday && new Date(user.description.birthday).toLocaleDateString(),
        [user.description.birthday]
    );

    return <Container>
        {birthday && <>
            <Icon icon="birthday" size="1em"/>
            &nbsp;{birthday}
        </>}
        {birthday && user.description.from && <>&nbsp;&nbsp;</>}
        {user.description.from && <>
            <Icon icon="location" size="1em"/>
            &nbsp;{user.description.from}
        </>}
    </Container>;
};

AdditionalDescription.propTypes = {
    user: Type.shape({
        description: Type.shape({
            birthday: Type.string,
            from: Type.string,
        }).isRequired
    }).isRequired,
};

export default React.memo(AdditionalDescription);