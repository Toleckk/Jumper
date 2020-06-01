import React, {useCallback, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import {Avatar, Button} from '../../atoms'
import useHover from 'Common/hooks/useHover'
import Icon from '../../../User/atoms/Icon'
import UploadIcon from './UploadIcon'
import useUpload from '../../hooks/useUpload'

const AvatarChanger = ({avatar, setAvatar}) => {
    const {execute: upload, pending: loading, value: data} = useUpload()
    const onDrop = useCallback(files => !loading && upload(files[0]), [upload, loading])
    const {hovered, hoverProps} = useHover()

    const {getRootProps, getInputProps, isDragAccept} = useDropzone({
        accept: 'image/*',
        onDropAccepted: onDrop,
        multiple: false,
        disabled: loading,
        maxSize: 4194304,
    })

    useEffect(() => {
        if (data && data.secure_url)
            setAvatar(data.secure_url)
    }, [data, setAvatar])

    return (
        <Button {...getRootProps()} {...hoverProps} disabled={loading}>
            <Avatar src={avatar} alt="avatar"/>
            <input {...getInputProps()}/>
            {loading && (
                <UploadIcon>
                    <Icon icon="uploading" size="50%"/>
                </UploadIcon>
            )}
            {(hovered || isDragAccept) && !loading && (
                <UploadIcon>
                    <Icon icon="upload" size="50%"/>
                </UploadIcon>
            )}
        </Button>
    )
}

export default React.memo(AvatarChanger)