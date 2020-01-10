import React, {useContext} from 'react';
import Type from "prop-types";
import {ThemeContext} from "styled-components";

const Icon = ({icon, color}) => {
    const theme = useContext(ThemeContext);
    const props = {width: '100%', height: '100%', fill: (color ? color : `rgb(${theme.secondary})`)};

    switch (icon) {
        case 'check':
            return <svg viewBox="0 0 46 46" {...props}>
                <path d="M23,6c9.374,0,17,7.627,17,17c0,9.375-7.626,17-17,17S6,32.375,6,23C6,13.627,13.626,6,23,6 M23,0C10.298,0,0,10.298,0,23
			            c0,12.703,10.298,23,23,23s23-10.297,23-23C46,10.298,35.702,0,23,0L23,0z"/>
                <path d="M20.887,32.482c-0.609,0.608-1.437,0.951-2.298,0.951c-0.861,0-1.689-0.343-2.298-0.951l-7.122-7.123
				        c-1.269-1.269-1.269-3.327,0-4.596c1.27-1.27,3.327-1.27,4.597,0l4.243,4.242c0.321,0.32,0.84,0.32,1.161,0l11.489-11.489
				        c1.271-1.27,3.327-1.27,4.597,0c1.27,1.27,1.27,3.327,0,4.597L20.887,32.482z"/>
            </svg>;
        case 'message':
            return <svg viewBox="0 0 382.117 382.117" {...props}>
                <path d="M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41
	                    c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354
	                    c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001
	                    c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987
	                    L62.87,84.397h256.378L191.059,192.987z"/>
            </svg>;
        default:
            return <></>;
    }
};

Icon.defaultProps = {
    color: null,
};

Icon.propTypes = {
    icon: Type.oneOf(['check', 'message']).isRequired,
    color: Type.string,
};

export default React.memo(Icon);