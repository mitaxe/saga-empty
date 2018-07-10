import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser } from './actions/user';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleButton = () => {
    this.props.getUser('Roma')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleButton}>Send</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser
}, dispatch)

export default connect(null, mapDispatchToProps)(App);
