import React from 'react';
import Container from "./Container";
import Avatar from "./Avatar";
import Name from "./Name";


const Friend = ({name, avatar}) => <Container>
    <Avatar src={avatar} alt={'Avatar'}/>
    <Name>{name}</Name>
</Container>;

export default Friend;