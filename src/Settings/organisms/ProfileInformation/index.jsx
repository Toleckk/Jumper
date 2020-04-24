import React, {useCallback, useMemo, useState} from "react"
import {Header} from '../../atoms'
import AvatarChanger from './AvatarChanger'
import BirthDate from "./BirthDate"
import InputsContainer from './InputsContainer'
import {Input} from 'Common/molecules'
import {Field, Form, FormSpy} from 'react-final-form'
import {useMutation} from '@apollo/react-hooks'
import {UPDATE_PROFILE_INFORMATION} from 'Common/apollo/entities/user'
import {ME} from 'Common/apollo/entities/user'
import TextArea from './TextArea'
import Icon from 'User/atoms/Icon'
import AboutContainer from './AboutContainer'
import Container from './Container'

const ProfileInformation = ({user}) => {
    const birthday = useMemo(() => user.description.birthday ? new Date(user.description.birthday) : '', [user.description.birthday])
    const [avatar, setAvatar] = useState(user.avatar)

    const [update, {loading}] = useMutation(UPDATE_PROFILE_INFORMATION, {refetchQueries: [{query: ME}]})

    const submit = useCallback(
        (data, form) => update({
            variables: {
                profileInformation: {
                    avatar,
                    description: {
                        about: data.about || '',
                        from: data.from || '',
                        birthday: data.birthday || '',
                    }
                }
            }
        }).then(() => form.initialize(data)),
        [update, avatar])

    return (
        <>
            <Header>Информация профиля</Header>
            <Form onSubmit={submit}>{({handleSubmit, form}) => (
                <form onSubmit={handleSubmit}>
                    <Container>
                        <AvatarChanger setAvatar={setAvatar} avatar={avatar}/>
                        <InputsContainer>
                            <Field name="birthday" initialValue={birthday}>{({input}) => (
                                <BirthDate {...input}/>
                            )}</Field>
                            <Field name="from" initialValue={user.description.from || undefined}>{({input}) => (
                                <Input legend="Откуда" placeholder="Место" {...input}/>
                            )}</Field>
                        </InputsContainer>
                    </Container>
                    <AboutContainer>
                        <Field name="about" initialValue={user.description.about || undefined}>{({input}) => (
                            // TODO: length
                            <TextArea {...input} placeholder="Расскажите о себе" aria-label="Расскажите о себе"/>
                        )}</Field>
                        <FormSpy subscription={{pristine: true}}>{props => (
                            (!props.pristine || avatar !== user.avatar) && <>
                                <button type="reset"
                                        onClick={() => (form.reset(), setAvatar(user.avatar))}
                                        title="Отменить изменения">
                                    <Icon icon="reset" size="40px"/>
                                </button>
                                <button type="submit" disabled={loading} title="Подтвердить изменения">
                                    <Icon icon="confirm" size="40px"/>
                                </button>
                            </>
                        )}</FormSpy>
                    </AboutContainer>
                </form>
            )}</Form>
        </>
    )
}

export default React.memo(ProfileInformation)