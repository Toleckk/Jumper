import React, {useCallback} from "react"
import {useMutation} from "@apollo/react-hooks"
import {Field, Form} from "react-final-form"
import useValidation from "Common/hooks/useValidation"
import {Input} from "Common/molecules"
import {Button} from "Common/atoms"
import {UPDATE_PASSWORD} from "Common/apollo/entities/user"
import {Header} from "../../atoms"
import StyledForm from "./StyledForm"

const LoginData = () => {
    const {passwordChanging} = useValidation()

    const [update, {loading}] = useMutation(UPDATE_PASSWORD)

    const submit = useCallback(
        (data, form) => update({variables: {password: data}}).then(() => setTimeout(form.reset)),
        [update]
    )

    // TODO: error handling
    return (
        <>
            <Header>Данные для входа</Header>
            <Form onSubmit={submit} validate={passwordChanging}>{({handleSubmit}) => (
                <>
                    <StyledForm onSubmit={handleSubmit}>
                        <Field name="oldPassword">{({input, meta: {error}}) =>
                            <Input password legend="Старый пароль" {...input} error={input.value && error}/>
                        }</Field>
                        <Field name="newPassword">{({input, meta: {error}}) =>
                            <Input password legend="Новый пароль" {...input} error={input.value && error}/>
                        }</Field>
                        <Button disabled={loading}>Изменить</Button>
                    </StyledForm>
                </>
            )}</Form>
        </>
    )
}

export default React.memo(LoginData)