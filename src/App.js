import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {


  holaMundo = ()=>{return 1+3}
  
  render() {
    console.log(this);
    const element = <div>Sara </div>;
    return <h1>Hello, {this.props.name}{this.holaMundo()}{element}</h1>;
  }
}


//Metodos configuracion

export default App;
