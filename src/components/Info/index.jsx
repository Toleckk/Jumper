import React from 'react';
import Container from "./Container";
import Logo from "./Logo";
import Header from "./Header";
import Text from "./Text";
import Authorization from "./Authorization/Authorization";

const Info = () => <Container>
    <Logo src="" alt=""/>
    <Header>Узнайте, что происходит в мире прямо сейчас.</Header>
    <Text>Присоединяйтесь к Твиттеру прямо сейчас!</Text>
    <Authorization/>
</Container>;

export default Info;