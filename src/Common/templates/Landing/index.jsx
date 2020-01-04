import React from 'react';
import Type from "prop-types";
import Picture from "./Picture";
import {FullWidthContainer, Main, Logo, LargeSpan, Header} from "./atoms";
import {Divider} from "Common/atoms";

const Landing = ({logo, header, description, content: Content, footer: Footer, withLastDivider}) => (
    <FullWidthContainer>
        <Picture/>
        <Main>
            <Logo large={logo === 'large'} src="" alt=""/>
            <Header>{header}</Header>
            <LargeSpan>{description}</LargeSpan>
            <Divider/>
            <Content/>
            {(Footer || withLastDivider) && <Divider/>}
            {Footer && <Footer/>}
        </Main>
    </FullWidthContainer>
);

Landing.defaultProps = {
    footer: null,
    logo: 'small',
    withLastDivider: false,
    loading: false,
};

Landing.propTypes = {
    logo: Type.oneOf(['large', 'small']),
    header: Type.string.isRequired,
    description: Type.string.isRequired,
    content: Type.elementType.isRequired,
    footer: Type.elementType,
    withLastDivider: Type.bool,
};

export default React.memo(Landing);