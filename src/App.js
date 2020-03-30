import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Connect from './store/connect'
import { clickButton } from './store/actions'
import './App.css';

const App = ({ dispatch, newValue }) => {
  const clickHandler = () => dispatch(clickButton(inputValue))

  const [inputValue, setInputValue] = useState('');
  
  return (
    <div className="App">
      <input 
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={clickHandler}>
        Click
      </button>
      <h1>{newValue}</h1>
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  newValue: PropTypes.string.isRequired
}

const mapStateToProps = ({newValue}, props) => {
  return {
    newValue,
    ...props
  }
}

export default Connect(mapStateToProps)(App);