import React from 'react';
import {
    Formik,
    Form as FormikForm,
    Field,
    ErrorMessage,
    useFormikContext,
    useField,
    useFormik
} from 'formik';

 function Form(props) {
    return (
        <Formik
            {...props}
        >
            <FormikForm className="needs-validation" novalidate="">
                {props.children}
            </FormikForm>
        </Formik>)
}

 function TextField(props) {
    const { name, label, placeholder, ...rest } = props
    return (
        <>
            {label && <label for={name}>{label}</label>}
            <Field
                className="form-control"
                type="text"
                name={name}
                id={name}
                placeholder={placeholder || ""} 
                {...rest}
            />
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

 function SelectField(props) {
    const { name, label, options } = props
    return (
        <>
            {label && <label for={name}>{label}</label>}
            <Field
                as="select"
                id={name}
                name={name}
            >
                <option value="" >Choose...</option>
                {options.map((optn, index) => <option value={optn.value} label={optn.label || optn.value} />)}
            </Field>
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export function SubmitButton(props){
    const { title, ...rest } = props;
    const { isSubmitting } = useFormikContext();
    
    return (
        <button type="submit" {...rest} disabled={isSubmitting}>{title}</button>
    )
}