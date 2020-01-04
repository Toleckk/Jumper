import React from 'react';
import {useMutation} from "@apollo/react-hooks";
import {useLocalizationContext} from "Common/contexts/Localization";
import useValidation from "Common/hooks/useValidation";
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import StyledInput from "../atoms/StyledInput";
import {CREATE} from "../../mutations/restore";

// TODO: remove
const validate = ({login}) =>  ({login: !login || !login.length});

const RestoreForm = () => {
    const {t} = useLocalizationContext();
    const [createRestore] = useMutation(CREATE);
    const submit = data => createRestore({variables: {email: data.login}});
    const {login} = useValidation('login');

    return <StyledForm onSubmit={submit} validate={validate} resetFieldErrorOnChange>{({onChange, updateState, errors}) => (
        <>
            <StyledInput name="login"
                         legend={t('login')}
                         onChange={onChange}
                         onBlur={updateState}
                         error={errors.login}
                         regex={login}
            />
            <StyledButton type="submit">{t('next')}</StyledButton>
        </>
    )}</StyledForm>;
};

export default React.memo(RestoreForm);