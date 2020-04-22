import React from 'react'
import Type from 'prop-types'
import Container from "./Container"
import Icon from "../../atoms/Icon"
import Button from "./Button"

const DeleteDialog = ({onClick}) => {
    return (
        <Container>
            <p>Вы уверены, что хотите удалить пост?</p>
            <Button onClick={onClick}>
                <Icon icon="trash"/>
            </Button>
        </Container>
    );
}

DeleteDialog.propTypes = {
    onClick: Type.func.isRequired,
};

export default React.memo(DeleteDialog)