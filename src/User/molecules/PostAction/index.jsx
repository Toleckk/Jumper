import React from 'react'
import Type from 'prop-types'
import {Icon} from "../../atoms"
import Button from "./Button"
import ActionCount from "./ActionCount"
import IconContainer from "./IconContainer"

const PostAction = ({icon, count, onClick, disabled}) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            <IconContainer>
                <Icon icon={icon}/>
            </IconContainer>
            <ActionCount>{count}</ActionCount>
        </Button>
    )
}

PostAction.defaultProps = {
    disabled: false,
};

PostAction.propTypes = {
    icon: Type.oneOf(['view', 'comment', 'share', 'love']).isRequired,
    count: Type.oneOfType([Type.string, Type.number]).isRequired,
    onClick: Type.func,
    disabled: Type.bool,
}

export default React.memo(PostAction)