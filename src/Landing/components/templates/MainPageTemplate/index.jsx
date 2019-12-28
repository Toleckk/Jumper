import React from 'react';
import Type from 'prop-types';
import Header from "../../atoms/Header";
import LargeSpan from "../../atoms/LargeSpan";
import Divider from "../../atoms/Divider";
import Logo from "./Logo";
import Loader from "./Loader";

const MainPageTemplate = ({logo, loading, header, description, content: Main, footer: Footer, withLastDivider}) => <>
    {loading && <Loader/>}
    <Logo large={logo === 'large'} src="" alt=""/>
    <Header>{header}</Header>
    <LargeSpan>{description}</LargeSpan>
    <Divider/>
    <Main/>
    {(Footer || withLastDivider) && <Divider/>}
    {Footer && <Footer/>}
</>;

MainPageTemplate.defaultProps = {
    footer: null,
    logo: 'small',
    withLastDivider: false,
    loading: false,
};

MainPageTemplate.propTypes = {
    logo: Type.oneOf(['large', 'small']),
    header: Type.string.isRequired,
    description: Type.string.isRequired,
    content: Type.elementType.isRequired,
    footer: Type.elementType,
    withLastDivider: Type.bool,
    loading: Type.bool,
};

export default React.memo(MainPageTemplate);