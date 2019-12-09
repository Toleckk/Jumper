import React from "react";
import Type from "prop-types";
import Picture from "./Picture";

const Avatar = ({src, editMode}) => {
    return <Picture src={src} alt=""/>;
};

Avatar.propTypes = {
    src: Type.string.isRequired,
    editMode: Type.bool.isRequired,
};

export default React.memo(Avatar);