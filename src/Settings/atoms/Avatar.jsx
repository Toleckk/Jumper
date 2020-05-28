import styled from "styled-components"
import {DEFAULT_DARK_AVATAR, DEFAULT_LIGHT_AVATAR} from "Common/apollo/entities/user"

export default styled.img.attrs(props => ({
    alt: 'avatar',
    src: props.src || (props.theme.name === 'dark' ? DEFAULT_DARK_AVATAR : DEFAULT_LIGHT_AVATAR)
}))`
  width: 150px;
  height: 150px;
  
  border-radius: 50%;
  
  border: 2px solid rgb(${props => props.theme.primary});
  box-shadow: 0 0 25px rgb(${props => props.theme.primary});
`