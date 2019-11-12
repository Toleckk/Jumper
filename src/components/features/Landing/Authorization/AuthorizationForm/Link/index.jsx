import React, {useState} from "react";
import Flex from "../../../../../atoms/Flex";
import StyledLink from "./StyledLink";
import StyledDivider from "./StyledDivider";
import Type from "prop-types";

const Link = ({children, to}) => {
    const [hovered, setHovered] = useState(false);

    const setActive = () => setHovered(true);
    const setInactive = () => setHovered(false);

    return <Flex direction="column"
                 onMouseEnter={setActive}
                 onMouseLeave={setInactive}
                 onFocus={setActive}
                 onBlur={setInactive}
    >
        <StyledLink to={to}>{children}</StyledLink>
        <StyledDivider hovered={hovered}/>
    </Flex>;
};

Link.propTypes = {
    to: Type.string.isRequired,
    children: Type.node.isRequired,
};

export default Link;