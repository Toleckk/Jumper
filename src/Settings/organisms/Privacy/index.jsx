import React, {useCallback} from "react"
import Type from 'prop-types'
import {useMutation} from "@apollo/react-hooks"
import {Flex} from "Common/atoms"
import {Header} from "../../atoms"
import Toggle from "../../molecules/Toggle"
import Label from "./Label"
import {ME, UPDATE_PRIVATE} from "Common/apollo/entities/user"

const Privacy = ({user}) => {
    const [updatePrivate, {loading}] = useMutation(UPDATE_PRIVATE, {refetchQueries: [{query: ME}]})

    const onChange = useCallback(isPrivate => {
        if (isPrivate !== user.private)
            return updatePrivate({variables: {isPrivate}})
    }, [updatePrivate, user])

    return (
        <>
            <Header>Настройки приватности</Header>
            <Flex align="center">
                <Label>Закрытый профиль</Label>
                <Toggle checked={user.private} height="30px" width="60px" disabled={loading} onChange={onChange}/>
            </Flex>
        </>
    )
}

Privacy.propTypes = {
    user: Type.shape({
        private: Type.bool,
    }).isRequired,
}

export default Privacy