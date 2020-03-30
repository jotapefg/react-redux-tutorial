import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickButton } from './actions'
import './App.css';

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  render(){
    const {
      clickButton,
      newValue
    } = this.props;

    const { inputValue } = this.state;
    
    return (
      <div className="App">
        <input 
          type="text"
          onChange={this.inputChange}
          value={inputValue}
        />
        <button onClick={() => clickButton(inputValue)}>
          Click
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
