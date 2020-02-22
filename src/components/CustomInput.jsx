import React, { Component } from 'react'

export default class CustomInput extends Component {
    render (){
        // por defecto no pasan todas las propiedades del input al componente
        // entonces se inyectan de esta manera, ya sean métodos de un campo o props de padres a hijos
        
        // Se recomienda crear componentes atómicos, 
        // para inyectarles css o html y que en toda la app
        // sea consistente
        const { input, meta, title, ...props } = this.props
        return (
            <div>
                {title && <span>{title}</span>}
                <input {...input} {...props}/>
                {meta.submitFailed && meta.error && <span>{meta.error}</span>}
            </div>
        )
    }
}