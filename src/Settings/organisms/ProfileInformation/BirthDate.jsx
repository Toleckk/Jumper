import React, {useState} from "react"
import Type from 'prop-types'
import DatePicker, {registerLocale, setDefaultLocale} from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import "react-datepicker/dist/react-datepicker.css"
import {Input} from "Common/molecules"

registerLocale('ru', ru)
setDefaultLocale('ru')

const BirthDate = ({birthday, value, ...props}) => {
    return (
        <DatePicker
            dateFormat="dd.MM.yyyy"
            customInput={<Input legend="Дата рождения"/>}
            showYearDropdown
            showMonthDropdown
            isClearable
            placeholderText="Дата"
            selected={value}
            {...props}
        />
    )
}

BirthDate.defaultProps = {
    birthday: '',
}

BirthDate.propTypes = {
    birthday: Type.string,
}

export default React.memo(BirthDate)