import {withFormik} from "formik";
import * as Yup from "yup";

const validate = withFormik({
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,
    handleSubmit: console.log,
    validationSchema: Yup.object().shape({
        login: Yup.string().required(true),
        password: Yup.string().required(true),
    })
});

export default validate;