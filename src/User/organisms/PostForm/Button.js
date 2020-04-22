import styled from "styled-components"
import IconButton from "../../molecules/ActionButtons/IconButton"

export default styled(IconButton)`
    position: absolute;
    right: 7px;
    bottom: 11px;
    
    &[disabled] {
        border-color: rgba(${props => props.theme.primary}, 0.5);
    }
`;