import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { clickButton } from './actions'
import './App.css';

export default function App(){
  const newValue = useSelector(store => store.clickState.newValue)
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('');
  
  return (
    <div className="App">
      <input 
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={() => dispatch(clickButton(inputValue))}>
        Click
      </button>
      <h1>{newValue}</h1>
    </div>
  );
}