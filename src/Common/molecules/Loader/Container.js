import styled from "styled-components";
import Type from "prop-types";
import {Flex} from "Common/atoms";

const Container = styled(Flex).attrs({align: 'center', justify: 'center'})`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1; 
    
    ${props => props.background === 'dark' && 'background: rgba(0, 0, 0, 0.7);'};
`;

Container.propTypes = {
    background: Type.oneOf(['dark', 'lite'])
};

export default Container;