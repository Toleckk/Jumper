import React from 'react';
import Type from 'prop-types';
import {Icon} from "../../atoms";
import Container from "./Container";
import ActionCount from "./ActionCount";
import IconContainer from "./IconContainer";

const PostAction = ({icon, count}) => {
    return <Container>
        <IconContainer>
            <Icon icon={icon}/>
        </IconContainer>
        <ActionCount>{count}</ActionCount>
    </Container>;
};

PostAction.propTypes = {
    icon: Type.oneOf(['view', 'comment', 'share', 'love']).isRequired,
    count: Type.number.isRequired,
};

export default React.memo(PostAction);