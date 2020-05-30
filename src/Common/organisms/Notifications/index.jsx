import React from "react"
import Type from 'prop-types'
import PendingSubscribesDisplay from "../PendingSubscribesDisplay"
import useOnClickOutside from "../../hooks/useOnClickOutside"
import Container from "./Container"

const Notifications = ({close}) => {
    const container = useOnClickOutside(close)

    return (
        <Container ref={container}>
            <PendingSubscribesDisplay/>
        </Container>
    )
}

Notifications.propTypes = {
    close: Type.func.isRequired,
}

export default Notifications