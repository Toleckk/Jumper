import React, {useContext} from 'react';
import Type from "prop-types";
import {ThemeContext} from "styled-components";
import {Link} from "Common/atoms";
import {Avatar, Icon} from "../../atoms";
import Container from "./Container";
import {UserStack} from "../index";

const UsersIntersection = ({users, count, ...props}) => {
    const {primaryText} = useContext(ThemeContext);

    if (count === 1 && users.length)
        return <Container as={Link} to={`/@${users[0].nickname}`} {...props}>
            Читает&nbsp;
            <Avatar size="small" src={users[0].avatar}/>
            &nbsp;
            {users[0].nickname}
        </Container>;

    if (count > 1 && count <= 3)
        return <Container {...props}>
            Читают&nbsp;
            <UserStack users={users}/>
            &nbsp;
        </Container>;

    if (count > 3)
        return <Container {...props}>
            Читают&nbsp;
            <UserStack users={users}/>
            &nbsp;
            и ещё {count - 3}
            &nbsp;
            <Icon icon="user" size="1em" color={`rgb(${primaryText})`}/>
        </Container>;
    return <></>;
};

UsersIntersection.propTypes = {
    users: Type.arrayOf(Type.shape({
        avatar: Type.string,
        nickname: Type.string.isRequired,
    })).isRequired,
    count: Type.number.isRequired,
};

export default React.memo(UsersIntersection);