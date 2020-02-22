import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class UserForm extends Component {
    render(){
        // handleSubmit: pasarsele dicha propuedad al onSubmit del form
        // previente el comportamiento por defecto, pasa la validación y si funciona
        // ejecuta el onSubmit 

        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field name="name" component="input" />
                <Field name="lastname" component="input"/>
                <input type="submit" value="Save"/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'user' // el name form debe ser único para que no choque con otros forms
})(UserForm)