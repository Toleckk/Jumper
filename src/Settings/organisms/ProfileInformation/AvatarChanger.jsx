import React, {useCallback, useEffect} from "react"
import {useDropzone} from 'react-dropzone'
import {useMutation} from "@apollo/react-hooks"
import {UPLOAD} from "Common/apollo/entities/file"
import {Avatar, Button} from "../../atoms"
import useHover from "Common/hooks/useHover"
import Icon from "../../../User/atoms/Icon"
import UploadIcon from "./UploadIcon"

const AvatarChanger = ({avatar, setAvatar}) => {
    const [upload, {loading, data}] = useMutation(UPLOAD)
    const onDrop = useCallback(files => !loading && upload({variables: {file: files[0]}}), [upload])
    const {hovered, hoverProps} = useHover()

    const {getRootProps, getInputProps, isDragAccept} = useDropzone({
        accept: 'image/*',
        onDropAccepted: onDrop,
        multiple: false,
        disabled: loading,
        maxSize: 4194304,
    })

    useEffect(() => {
        if (data && data.upload && data.upload.filename)
            setAvatar(data.upload.filename)
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