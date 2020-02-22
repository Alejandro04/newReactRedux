import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { increment, decrement, set } from './reducers';
import UserForm from './components/UserForm';
import './App.css';

class App extends Component {

  // Todos los redux form tienen una propiedad onSubmit
  // Siempre se le va pasar el payload completo
  // No se necesita escribir la forma de prevenir el comportamiento, por defecto lo hacer ReduxForm

  handleSubmit = payload => {
    console.log(payload)
  }

  render() {    
    return (
      <div className="App">
        <UserForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

// mapStateToProps va a darle al componente App lo único que necesite para funcionar
// es decir, no le vamos a pasar todas las propiedades
const mapStateToProps = state => {
  return {
    valor: state.counter,
  }
}

// mapDispatchToProps recibe acciones y se va encargar de darle dichas acciones al componente
// App para que las pueda tomar y transformarlas en funciones.

// proceso: dispatch va ejecutar los reducers, el reducer va retornar el nuevo estado.
const mapDispatchToProps = dispatch => ({
/*   increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  set: payload => dispatch(set(payload)) */
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
