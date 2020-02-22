import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import CustomInput from './CustomInput'

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Name is required'
    }
    if (!values.lastname) {
        errors.lastname = "Lastname is required"
    }

    return errors
}

class UserForm extends Component {
    render(){
        // handleSubmit: pasarsele dicha propuedad al onSubmit del form
        // previente el comportamiento por defecto, pasa la validación y si funciona
        // ejecuta el onSubmit 

        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field name="name" component={CustomInput} placeholder="Name" title="Name" />
                <Field name="lastname" component={CustomInput} placeholder="LastName" title="Lastname"/>
                <input type="submit" value="Save"/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'user', // el name form debe ser único para que no choque con otros forms
    validate,
})(UserForm)