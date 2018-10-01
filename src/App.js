
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";

class App extends Component {

  state = {
    working: false
  };
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const speed = this.state.working ? 'App-logo-speed' : 'App-logo';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={speed} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick}>Working ?</button>
        <Quotes />

      </div>
    );
  }
}

export default App;