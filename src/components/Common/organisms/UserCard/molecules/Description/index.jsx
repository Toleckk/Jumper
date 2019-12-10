import React, {useState} from 'react';
import Type from "prop-types";
import {useTranslation} from "contexts/Localization";
import StyledSpan from "./StyledSpan";
import Container from "./Container";
import {StyledInput} from "../../atoms";

const Description = ({age, from, editMode, onChange}) => {
    const {t} = useTranslation();

    const [ageText, setAge] = useState(age);
    const [fromText, setFrom] = useState(from);

    const onAgeChanged = e => {
        setAge(e.target.value);
        return onChange && onChange(e);
    };

    const onFromChanged = e => {
        setFrom(e.target.value);
        return onChange && onChange(e);
    };

    if(!editMode && age !== ageText)
        setAge(age);

    if(!editMode && from !== fromText)
        setFrom(from);

    return <Container>
        {(age || editMode) && <>
            {editMode
                ? <StyledInput
                    centered
                    name="age"
                    value={ageText}
                    onChange={onAgeChanged}
                    style={{width: (ageText || '').toString().length * 10 + 'px'}}
                />
                : <StyledSpan>{age}</StyledSpan>
            }
            <StyledSpan>{' ' + t('years old')}</StyledSpan>
        </>}
        {(editMode || (age && from)) && <StyledSpan>, </StyledSpan>}
        {(editMode || from) && <>
            <StyledSpan>{t('from') + ': '}</StyledSpan>
            {editMode
                ? <StyledInput
                    centered
                    name="from"
                    value={fromText}
                    onChange={onFromChanged}
                    style={{width: (fromText || '').length * 10 + 'px'}}
                />
                : <StyledSpan>{from}</StyledSpan>
            }
        </>}
    </Container>;
};

Description.defaultProps = {
    age: 0,
    from: '',
    onChange: null,
};

Description.propTypes = {
    age: Type.number,
    from: Type.string,
    editMode: Type.bool.isRequired,
    onChange: Type.func,
};

export default React.memo(Description);