import React, {useState} from 'react';
import Type from 'prop-types';
import {Loader} from "components/Common/molecules";
import Header from "../../atoms/Header";
import LargeSpan from "../../atoms/LargeSpan";
import Divider from "../../atoms/Divider";
import Logo from "./Logo";

const MainPageTemplate = ({logo, header, description, content: Main, footer: Footer, withLastDivider}) => {
    const [loaded, setLoaded] = useState(false);

    return loaded
        ? <Loader/>
        : <>
            <Logo large={logo === 'large'} src="" alt=""/>
            <Header>{header}</Header>
            <LargeSpan>{description}</LargeSpan>
            <Divider/>
            <Main setLoaded={setLoaded}/>
            {(Footer || withLastDivider) && <Divider/>}
            {Footer && <Footer/>}
        </>;
};

MainPageTemplate.defaultProps = {
    footer: null,
    logo: 'small',
    withLastDivider: false,
};

MainPageTemplate.propTypes = {
    logo: Type.oneOf(['large', 'small']),
    header: Type.string.isRequired,
    description: Type.string.isRequired,
    content: Type.elementType.isRequired,
    footer: Type.elementType,
    withLastDivider: Type.bool,
};

export default React.memo(MainPageTemplate);