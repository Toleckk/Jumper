import React from 'react';
import Container from "./Container";
import Logo from "./Logo";
import Header from "./Header";
import Authorization from "./Authorization/Authorization";
import Registration from "./Registration";

const Info = () => <Container>
    <Logo src="" alt=""/>
    <Header>Узнайте, что происходит в мире прямо сейчас.</Header>
    <span>Присоединяйтесь к Твиттеру прямо сейчас!</span>
    <Authorization/>
    <Registration/>
</Container>;

export default Info;