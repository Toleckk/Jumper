import React from 'react';
import Type from "prop-types";
import {Flex} from "Common/atoms";
import Avatar from "../atoms/Avatar";

const props = {alt: '', border: true, size: 'small'};

const UserStack = ({users}) => {
    const [first, ...rest] = users.slice(0, 3);

    return <Flex>
        <Avatar key={0} src={first.avatar} {...props}/>
        {rest.map(({avatar}, i) => (
            <Avatar key={i + 1} src={avatar} stacked {...props}/>
        ))}
    </Flex>;
};

UserStack.propTypes = {
    users: Type.arrayOf(Type.shape({
        avatar: Type.string,
        nickname: Type.string.isRequired,
    })).isRequired
};

export default React.memo(UserStack);