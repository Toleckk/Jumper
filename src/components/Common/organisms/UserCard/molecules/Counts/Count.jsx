import React from "react";
import Type from "prop-types";
import CountWrapper from "./CountWrapper";

const Count = ({name, count}) => <CountWrapper>{`${name}: ${count}`}</CountWrapper>;

Count.propTypes = {
    name: Type.string.isRequired,
    count: Type.number.isRequired,
};

export default React.memo(Count);