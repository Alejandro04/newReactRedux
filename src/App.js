import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, set } from './reducers';
import './App.css';

class App extends Component {

  handleSet = e => {
    const { set } = this.props
    const { valor } = this.state
    set(Number(valor))
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { increment, decrement, valor } = this.props
    // problem: se renderiza el boton que llama a la funcion handleSet al cargar el componente
    // por eso revienta, porque intenta acceder a una propiedad del estado que, al cargar, no existe
    return (
      <div className="App">
        <p> {valor} </p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <input name='valor' onChange={this.handleChange}></input>
        <button onClick={this.handleSet()}>Set</button>
      </div>
    )
  }
}

// mapStateToProps va a darle al componente App lo único que necesite para funcionar
// es decir, no le vamos a pasar todas las propiedades
const mapStateToProps = state => {
  return {
    valor: state,
  }
}

// mapDispatchToProps recibe acciones y se va encargar de darle dichas acciones al componente
// App para que las pueda tomar y transformarlas en funciones.

// proceso: dispatch va ejecutar los reducers, el reducer va retornar el nuevo estado.
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  set: payload => dispatch(set(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
