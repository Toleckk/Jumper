import React, {useCallback, useEffect, useState} from "react"
import Type from 'prop-types'
import Container from "./Container"
import Switch from "./Switch"

const Toggle = ({height, width, onChange, checked, disabled}) => {
    const [isChecked, setChecked] = useState(checked)

    const toggle = useCallback(() => setChecked(!isChecked), [setChecked, isChecked])

    useEffect(() => void(onChange && onChange(isChecked)), [isChecked, onChange])

    return (
        <Container height={height} width={width} role="checkbox" onClick={toggle} checked={isChecked} disabled={disabled}>
            <Switch height={height} width={width} checked={isChecked}/>
        </Container>
    )
}


Toggle.defaultProps = {
    onChange: null,
    checked: false,
    disabled: false,
}


Toggle.propTypes = {
    height: Type.string.isRequired,
    width: Type.string.isRequired,
    disabled: Type.bool,
    onChange: Type.func,
    checked: Type.bool,
}

export default React.memo(Toggle)