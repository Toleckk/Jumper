import React, {useCallback, useContext} from "react"
import {ThemeContext} from "styled-components"
import {Field, Form, FormSpy} from "react-final-form"
import {TextArea} from "../../atoms"
import StyledForm from "./StyledForm"
import Icon from "../../../User/atoms/Icon"
import Button from "./Button"
import FocusWithin from "react-focus-within"
import {useMutation} from "@apollo/react-hooks"
import {COMMENT, COMMENTS} from "Common/apollo/entities/comment"
import {GET_POST} from "../../../Common/apollo/entities/post"

const SendForm = ({post}) => {
    const theme = useContext(ThemeContext)

    const [comment, {loading}] = useMutation(COMMENT, {
        variables: {post: post.id},
        refetchQueries: [
            {query: COMMENTS, variables: {post: post.id, first: 15}},
            {query: GET_POST, variables: {id: post.id}},
        ],
    })

    const onSubmit = useCallback(({text}, form) => void (comment({variables: {text}}).then(() => setTimeout(form.reset))), [comment])

    return (
        <Form onSubmit={onSubmit}>{({handleSubmit}) => (
            <FocusWithin>{({focusProps, isFocused}) => (
                <StyledForm onSubmit={handleSubmit} {...focusProps}>
                    <Field name="text">{({input}) => (
                        <TextArea rows="1" {...input}/>
                    )}</Field>
                    <FormSpy subscription={{values: true}}>{({values}) => (
                        <Button type="submit" focused={isFocused} disabled={!values.text || loading}>
                            <Icon icon="message" color={`rgb(${theme.primary})`}/>
                        </Button>
                    )}</FormSpy>
                </StyledForm>
            )}</FocusWithin>
        )}</Form>
    )
}

export default SendForm