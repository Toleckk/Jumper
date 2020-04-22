import React, {useCallback} from 'react'
import Type from 'prop-types'
import {useMutation} from '@apollo/react-hooks'
import useModal from 'use-react-modal'
import {DELETE_POST} from 'Common/apollo/entities/post'
import {GET_USER} from 'Common/apollo/entities/user'
import useIsMe from 'Common/hooks/useIsMe'
import Icon from '../../atoms/Icon'
import Button from './Button'
import DeleteDialog from "../DeleteDialog"


const DeletePost = ({id, user, onDelete}) => {
    const isMe = useIsMe()
    const {openModal, closeModal, isOpen, Modal} = useModal({background: 'rgba(0, 0, 0, 0.5)'})
    const [deletePost, {loading}] = useMutation(DELETE_POST, {
        variables: {id}, refetchQueries: [{
            query: GET_USER,
            variables: {nickname: user.nickname}
        }]
    })

    const onDeleteClick = useCallback(() => {
        void(deletePost());
        onDelete();
        setTimeout(closeModal, 0);
    }, [closeModal, deletePost, onDelete])

    if (!isMe(user))
        return null

    return (
        <Button onClick={openModal} disabled={loading}>
            <Icon icon="delete" size="20px"/>
            {isOpen && (
                <Modal>
                    <DeleteDialog onClick={onDeleteClick}/>
                </Modal>
            )}
        </Button>
    )
}

DeletePost.propTypes = {
    id: Type.string.isRequired,
    user: Type.shape({
        nickname: Type.string.isRequired,
    }).isRequired,
    onDelete: Type.func,
}

export default DeletePost