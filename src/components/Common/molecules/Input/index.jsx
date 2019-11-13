import React from "react";
import Type from "prop-types";
import nanoid from "nanoid";
import {Flex} from "components/Common/atoms";
import Eye from "../Eye";
import StyledFieldset from "./StyledFieldset";
import StyledLegend from "./StyledLegend";
import StyledInput from "./StyledInput";
import withValidation from "./withValidation";
import {useEye, useFocused} from "./hooks";

const Input = ({id, legend, className, password, error, onFocus, onBlur, ...props}) => {
    const [focus, setFocused, setUnfocused] = useFocused(onFocus, onBlur);
    const [eyePressed, setPressed, setUnpressed] = useEye();

    return <StyledFieldset focused={focus} className={className} error={error}>
        <StyledLegend focused={focus}>
            <label htmlFor={id}>{legend}</label>
        </StyledLegend>
        <Flex>
            <StyledInput
                id={id}
                type={password && !eyePressed ? 'password' : 'text'}
                onFocus={setFocused}
                onBlur={setUnfocused}
                {...props}
            />
            {password ? <Eye onMouseDown={setPressed} onMouseUp={setUnpressed}/> : ''}
        </Flex>
    </StyledFieldset>;
};

Input.defaultProps = {
    id: 'id' + nanoid(10),
    legend: '',
    className: '',
    password: false,
    error: false,
    onFocus: null,
    onBlur: null,
    onMouseDown: null,
    onMouseUp: null,
};

Input.propTypes = {
    id: Type.string,
    legend: Type.string,
    className: Type.string,
    password: Type.bool,
    error: Type.bool,
    onFocus: Type.func,
    onBlur: Type.func,
    onMouseDown: Type.func,
    onMouseUp: Type.func,
};

export default withValidation(Input);