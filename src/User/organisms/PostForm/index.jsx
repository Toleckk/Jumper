import React, {useCallback, useContext, useState} from 'react'
import {ThemeContext} from "styled-components"
import {Field, Form, FormSpy} from 'react-final-form'
import FocusWithin from "react-focus-within"
import {useMutation, useQuery} from "@apollo/react-hooks"
import {Divider} from "Common/atoms"
import {GET_USER, ME} from "Common/apollo/entities/user"
import {CREATE_POST} from "Common/apollo/entities/post"
import useValidation from "Common/hooks/useValidation"
import {Icon} from "../../atoms"
import TextArea from "./TextArea"
import Container from './Container'
import Button from "./Button"
import {FEED} from "../../../Common/apollo/entities/feed"

const PostForm = () => {
    const {primaryText} = useContext(ThemeContext)
    const {post: postValidation} = useValidation()
    const {data: me} = useQuery(ME)

    const [post, {loading}] = useMutation(CREATE_POST, {
        refetchQueries: [{
            query: GET_USER,
            variables: {nickname: me.me.nickname, postsCount: 25},
        }, {
            query: FEED,
            variables: {first: 25}
        }]
    })

    const onSubmit = useCallback(({text}) => post({variables: {text}}), [post])

    const [value, setValue] = useState('')

    const onChange = onChange => event => {
        if (postValidation.test(event.target.value)) {
            setValue(value)
            return onChange(event)
        }
    }

    return (
        <>
            <FocusWithin>{({isFocused, focusProps}) => (
                <Container {...focusProps}>
                    <Form onSubmit={onSubmit}>{({handleSubmit, form}) => (
                        <form onSubmit={(...args) => handleSubmit(...args).then(() => form.reset())}>
                            <Field name="text">{({input}) =>
                                <TextArea rows={isFocused || input.value ? 4 : 1}
                                          placeholder="Напишите текст..." {...input}
                                          onChange={onChange(input.onChange)}/>
                            }</Field>
                            <FormSpy subscription={{values: true}}>{({values}) => (
                                isFocused || values.text
                                    ? (
                                        <Button disabled={!values.text || loading} type="submit">
                                            <Icon
                                                icon="message"
                                                color={(!values.text || loading) ? `rgba(${primaryText}, 0.5)` : `rgb(${primaryText})`}
                                            />
                                        </Button>
                                    )
                                    : <></>
                            )}</FormSpy>
                        </form>
                    )}</Form>
                </Container>
            )}</FocusWithin>
            <Divider/>
        </>
    )
}

export default React.memo(PostForm)