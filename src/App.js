import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, set } from './reducers';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    )
  }
}

// mapStateToProps va a darle al componente App lo único que necesite para funcionar
// es decir, no le vamos a pasar todas las propiedades
const mapStateToProps = state => {
  console.log({state})
  return {
    value: state,
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
